// Fork of https://codepen.io/developit/full/xGoagz/
import { h } from 'sinuous';
import { observable, computed, subscribe, sample } from 'sinuous/observable';
import { map } from 'sinuous/map';

const counts = [50, 100, 200, 500, 1000, 2000];
const count = observable(counts[0]);
const LOOPS = 6;

let debounceRendering = requestAnimationFrame;

function AnimationPicker() {
	const timingFunction = observable('requestAnimationFrame');
	const IDLE_TIMEOUT = {
		timeout: 50
	};

	const timingFunctions = {
		'requestAnimationFrame': requestAnimationFrame,
		'setTimeout(100)': f => setTimeout(f, 100),
		'requestIdleCallback': f => requestIdleCallback(f, IDLE_TIMEOUT),
		'setTimeout(0)': f => setTimeout(f, 0)
	};

	subscribe(() => (debounceRendering = timingFunctions[timingFunction()]));

	return html`
    <label class="animation-picker picker" onmousedown=${(e) => e.stopPropagation()}>
      Timing:
      <select value=${timingFunction} onchange=${(e) => timingFunction(e.target.value)}>
        ${() => Object.keys(timingFunctions).map(name => html`
          <option value=${name} disabled=${timingFunctions[name]===undefined}>${name}</option>
        `) }
      </select>
    </label>
		<label class="amount-picker picker" onmousedown=${(e) => e.stopPropagation()}>
			Amount
			<select value=${count} onchange=${(e) => count(parseInt(e.target.value))}>
				${counts.map(count => html`<option value=${count}>${count}</option>`)}
			</select>
		</label>
  `;
}

/** This component controls the app itself.
 *  It wires up some global mouse events (this is uncommon).
 *  When component state changes, it gets re-rendered automatically.
 */
function Main() {
	const x = observable(0);
	const y = observable(0);
	const big = observable(false);
	const counter = observable(0);

	let touch = navigator.maxTouchPoints > 1;

	// set mouse position state on move:
	addEventListener(touch ? 'touchmove' : 'mousemove', e => {
		setMouse(e.touches ? e.touches[0] : e);
	});

	// holding the mouse down enables big mode:
	addEventListener(touch ? 'touchstart' : 'mousedown', e => {
		e.preventDefault();
		big(true);
	});

	addEventListener(touch ? 'touchend' : 'mouseup', () => big(false));

	increment();
	function increment() {
		counter(counter() + 1);
		debounceRendering(increment);
	}

	function setMouse({ pageX, pageY }) {
		x(pageX);
		y(pageY);
	}

	const max = computed(function mmax() {
		return count() + Math.round(Math.sin(counter() / 90 * 2 * Math.PI) * count() * 0.5);
	});

	const cache = [];
	const cursors = computed(function ccursors() {
		const list = Array(max()).fill(0);
		return sample(() => list.map((_, i) => cache[i] || (cache[i] = cursor(i))));
	});

	function cursor(i) {
		return {
			x: computed(function xx() {
				let f = i / max() * LOOPS,
					θ = f * 2 * Math.PI,
					m = 20 + i * 2;
				return (sample(x) + Math.sin(θ) * m) | 0;
			}),
			y: computed(function yy() {
				let f = i / max() * LOOPS,
					θ = f * 2 * Math.PI,
					m = 20 + i * 2;
				return (sample(y) + Math.cos(θ) * m) | 0;
			}),
			color: computed(function ccolor() {
				let f = i / max() * LOOPS,
					hue = (f * 255 + sample(counter) * 10) % 255;
				return 'hsl(' + hue + ',100%,50%)';
			})
		};
	}

	return html`
    <div id="main">
      <${AnimationPicker} />
      <${Cursor} label big=${big} x=${x} y=${y} />
      ${map(cursors, ({ x, y, color }) =>
				html`<${Cursor} big=${big} x=${x} y=${y} color=${color} />`)}
    </div>
  `;
}

/** Represents a single coloured dot. */
function Cursor(props) {
	const { big, label, x, y, color } = props;

	// get shared/pooled class object
	function getClass(big, label) {
		let cl = 'cursor';
		if (big) cl += ' big';
		if (label) cl += ' label';
		return cl;
	}

	let inner = null;
	if (label) inner = html`<span class="label">${x},${y}</span>`;
	return html`<div class=${() => getClass(big(), label)}
    style=left:${x}px;top:${y}px;border-color:${color}>${inner}</div>`;
}

// Mount the top-level component to the DOM:
document.body.appendChild(Main());

// Addendum: disable dragging on mobile
addEventListener('touchstart', e => (e.preventDefault(), false));
