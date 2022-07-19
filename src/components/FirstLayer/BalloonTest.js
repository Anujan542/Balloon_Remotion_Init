/* eslint-disable react/style-prop-object */
import {
	interpolate,
	AbsoluteFill,
	spring,
	useVideoConfig,
	useCurrentFrame,
} from 'remotion';

import React from 'react';

import './BalloonTest.css';

const BalloonTest = ({color1, color2}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame,
		config: {
			mass: 10,
			damping: 200,
		},
	});

	const opacity = interpolate(progress, [0, 0.5], [500, 5], {
		extrapolateRight: 'clamp',
	});
	return (
		<>
			{/* Left Side */}

			<AbsoluteFill
				style={{
					marginLeft: '-47.6rem',
					marginTop: '-1rem',
					transform: `translateY(${opacity}px)`,
				}}
			>
				<svg
					xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
					xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
					xmlns:cc="http://creativecommons.org/ns#"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xmlns:dc="http://purl.org/dc/elements/1.1/"
					xmlns:svg="http://www.w3.org/2000/svg"
					xmlns:ns1="http://sozi.baierouge.fr"
					id="svg3059"
					sodipodi:docname="pink_balloon.svg"
					viewBox="0 0 263.16 923.89"
					version="1.1"
					inkscape:version="0.48.1 r9760"
				>
					<defs id="defs3061">
						<filter
							id="filter3961"
							height="1.2083"
							width="1.4792"
							colorInterpolationFilters="sRGB"
							y="-.10416"
							x="-.23960"
							inkscape:collect="always"
						>
							<feGaussianBlur
								id="feGaussianBlur3963"
								stdDeviation="14.438448"
								inkscape:collect="always"
							/>
						</filter>
					</defs>
					<g
						id="layer1"
						inkscape:label="Layer 1"
						transform="translate(-651.28 -35.633)"
						inkscape:groupmode="layer"
					>
						<g id="g3277">
							<g id="g3965" transform="matrix(.72886 0 0 .72886 594.67 100.02)">
								<g id="g3797" transform="translate(-75.901 -162.06)">
									<path
										id="path2985"
										style={{fill: '#567d2e'}}
										inkscape:connector-curvature="0"
										d="m334.12 91.969c-13.435 0.000003-26.549 2.0694-38.906 5.9688-12.357 3.8993-23.949 9.6016-34.625 16.844-10.676 7.2421-20.427 16.005-29.312 25.969-8.8854 9.9639-16.93 21.142-24.281 33.25-7.3511 12.108-14.011 25.157-20.125 38.969-6.114 13.811-11.685 28.386-16.531 43.656-4.8463 15.27-8.9841 31.235-11.969 47.938-2.9846 16.702-4.8044 34.146-4.8125 52.438-0.008 18.292 1.8436 36.574 5.625 54.844 3.7814 18.269 9.5052 36.501 16.844 54.562 7.3385 18.061 16.285 35.965 26.125 53.344 9.8402 17.378 20.558 34.246 31.312 50.188 10.755 15.941 21.514 30.936 31.594 44.469 10.079 13.532 19.45 25.589 27.844 35.625 8.3936 10.036 15.795 18.06 22.5 23.531 4.3146 3.5202 8.3569 5.9672 12.312 7.2812-4.0805 7.2643-8.8776 13.974-16.219 20.938 18.76-3.2214 25.452-0.38353 45.188 2.25-9.0267-6.2557-12.499-13.561-16.812-22.875 4.2537-1.2131 8.5733-3.7712 13.219-7.5625 6.6912-5.4609 14.068-13.472 22.438-23.5 8.3698-10.028 17.73-22.068 27.781-35.594 10.052-13.526 20.771-28.531 31.5-44.469s21.428-32.81 31.25-50.188c9.8216-17.377 18.764-35.249 26.094-53.312 7.3298-18.063 13.03-36.321 16.812-54.594 3.7829-18.273 5.6547-36.578 5.6562-54.875 0.002-18.297-1.8088-35.73-4.7812-52.438-2.9725-16.708-7.1015-32.693-11.938-47.969-4.836-15.276-10.392-29.84-16.5-43.656-6.1083-13.816-12.774-26.888-20.125-39-7.35-12.11-15.39-23.28-24.28-33.25s-18.63-18.73-29.31-25.97-22.3-12.94-34.66-16.842c-12.36-3.9-25.47-5.969-38.91-5.969z"
									/>
								</g>
								<path
									id="path3803"
									d="m307.71-49.233c102.62 90.994 99.78 239.97 90.26 328.22-5.47-87.82-34.33-192.89-112.83-256.42-64.711-52.375 2.6382-89.468 22.565-71.799z"
									sodipodi:nodetypes="scss"
									style={{
										opacity: 0.1,
										filter: 'url(#filter3961);fill:#00000',
									}}
									inkscape:connector-curvature="0"
								/>
							</g>
							<path
								id="path3971"
								style={{stroke: color1, fill: 'none'}}
								strokeWidth="9"
								//	Style="stroke:#707070;stroke-width:9.1866;fill:none"
								d="m778.09 478.47 8.8541 0.37743c-6.9021 14.109-13.429 28.402-19.571 42.858-7.9339 18.674-15.259 37.733-19.306 57.615-4.0467 19.882-4.7158 40.732 0.59059 60.315 4.6071 17.002 13.508 32.459 21.165 48.323 7.6578 15.864 14.247 32.896 13.671 50.502-0.67203 20.553-11.067 39.607-23.638 55.881s-27.523 30.635-39.592 47.285c-24.408 33.675-36 76.408-31.956 117.8"
								sodipodi:nodetypes="cczcaac"
								inkscape:path-effect="#path-effect3973"
								inkscape:connector-curvature="0"
								inkscape:original-d="m 778.09176,478.46888 8.85408,0.37743 c 0,0 -34.02813,18.31917 -19.57066,42.85786 14.45746,24.53871 -17.11899,90.39081 -18.71536,117.92983 -1.0873,41.71731 38.51335,64.09091 34.83623,98.82533 -4.24617,40.1097 -47.2499,66.13336 -63.22997,103.16652 -16.1196,37.3565 -31.95558,117.80064 -31.95558,117.80064"
							/>
						</g>
					</g>
				</svg>

				{/* <div className="balloon-g">
					<div
						className="balloon balloon-blue"
						style={{
							backgroundColor: color1,
							// BoxShadow: `inset 0px 0px 10px 10px ${color2}`,
						}}
					>
						<div className="balloon-ref" />
						<div className="thread" style={{backgroundColor: color1}} />
					</div>
				</div> */}
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					marginLeft: '-38rem',
					marginTop: '10rem',
					transform: `translateY(${opacity}px)`,
				}}
			>
				<svg
					xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
					xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
					xmlns:cc="http://creativecommons.org/ns#"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xmlns:dc="http://purl.org/dc/elements/1.1/"
					xmlns:svg="http://www.w3.org/2000/svg"
					xmlns:ns1="http://sozi.baierouge.fr"
					id="svg3059"
					sodipodi:docname="pink_balloon.svg"
					viewBox="0 0 263.16 923.89"
					version="1.1"
					inkscape:version="0.48.1 r9760"
				>
					<defs id="defs3061">
						<filter
							id="filter3961"
							height="1.2083"
							width="1.4792"
							colorInterpolationFilters="sRGB"
							y="-.10416"
							x="-.23960"
							inkscape:collect="always"
						>
							<feGaussianBlur
								id="feGaussianBlur3963"
								stdDeviation="14.438448"
								inkscape:collect="always"
							/>
						</filter>
					</defs>
					<g
						id="layer1"
						inkscape:label="Layer 1"
						transform="translate(-651.28 -35.633)"
						inkscape:groupmode="layer"
					>
						<g id="g3277">
							<g id="g3965" transform="matrix(.72886 0 0 .72886 594.67 100.02)">
								<g id="g3797" transform="translate(-75.901 -162.06)">
									<path
										id="path2985"
										style={{fill: color2}}
										inkscape:connector-curvature="0"
										d="m334.12 91.969c-13.435 0.000003-26.549 2.0694-38.906 5.9688-12.357 3.8993-23.949 9.6016-34.625 16.844-10.676 7.2421-20.427 16.005-29.312 25.969-8.8854 9.9639-16.93 21.142-24.281 33.25-7.3511 12.108-14.011 25.157-20.125 38.969-6.114 13.811-11.685 28.386-16.531 43.656-4.8463 15.27-8.9841 31.235-11.969 47.938-2.9846 16.702-4.8044 34.146-4.8125 52.438-0.008 18.292 1.8436 36.574 5.625 54.844 3.7814 18.269 9.5052 36.501 16.844 54.562 7.3385 18.061 16.285 35.965 26.125 53.344 9.8402 17.378 20.558 34.246 31.312 50.188 10.755 15.941 21.514 30.936 31.594 44.469 10.079 13.532 19.45 25.589 27.844 35.625 8.3936 10.036 15.795 18.06 22.5 23.531 4.3146 3.5202 8.3569 5.9672 12.312 7.2812-4.0805 7.2643-8.8776 13.974-16.219 20.938 18.76-3.2214 25.452-0.38353 45.188 2.25-9.0267-6.2557-12.499-13.561-16.812-22.875 4.2537-1.2131 8.5733-3.7712 13.219-7.5625 6.6912-5.4609 14.068-13.472 22.438-23.5 8.3698-10.028 17.73-22.068 27.781-35.594 10.052-13.526 20.771-28.531 31.5-44.469s21.428-32.81 31.25-50.188c9.8216-17.377 18.764-35.249 26.094-53.312 7.3298-18.063 13.03-36.321 16.812-54.594 3.7829-18.273 5.6547-36.578 5.6562-54.875 0.002-18.297-1.8088-35.73-4.7812-52.438-2.9725-16.708-7.1015-32.693-11.938-47.969-4.836-15.276-10.392-29.84-16.5-43.656-6.1083-13.816-12.774-26.888-20.125-39-7.35-12.11-15.39-23.28-24.28-33.25s-18.63-18.73-29.31-25.97-22.3-12.94-34.66-16.842c-12.36-3.9-25.47-5.969-38.91-5.969z"
									/>
								</g>
								<path
									id="path3803"
									d="m307.71-49.233c102.62 90.994 99.78 239.97 90.26 328.22-5.47-87.82-34.33-192.89-112.83-256.42-64.711-52.375 2.6382-89.468 22.565-71.799z"
									sodipodi:nodetypes="scss"
									style={{
										opacity: 0.1,
										filter: 'url(#filter3961);fill:#00000',
									}}
									inkscape:connector-curvature="0"
								/>
							</g>
							<path
								id="path3971"
								style={{stroke: color2, fill: 'none'}}
								strokeWidth="9"
								//	Style="stroke:#707070;stroke-width:9.1866;fill:none"
								d="m778.09 478.47 8.8541 0.37743c-6.9021 14.109-13.429 28.402-19.571 42.858-7.9339 18.674-15.259 37.733-19.306 57.615-4.0467 19.882-4.7158 40.732 0.59059 60.315 4.6071 17.002 13.508 32.459 21.165 48.323 7.6578 15.864 14.247 32.896 13.671 50.502-0.67203 20.553-11.067 39.607-23.638 55.881s-27.523 30.635-39.592 47.285c-24.408 33.675-36 76.408-31.956 117.8"
								sodipodi:nodetypes="cczcaac"
								inkscape:path-effect="#path-effect3973"
								inkscape:connector-curvature="0"
								inkscape:original-d="m 778.09176,478.46888 8.85408,0.37743 c 0,0 -34.02813,18.31917 -19.57066,42.85786 14.45746,24.53871 -17.11899,90.39081 -18.71536,117.92983 -1.0873,41.71731 38.51335,64.09091 34.83623,98.82533 -4.24617,40.1097 -47.2499,66.13336 -63.22997,103.16652 -16.1196,37.3565 -31.95558,117.80064 -31.95558,117.80064"
							/>
						</g>
					</g>
				</svg>
				{/* <div className="balloon-g">
					<div
						className="balloon balloon-blue"
						style={{backgroundColor: color2}}
					>
						<div className="balloon-ref" />
						<div className="thread" style={{backgroundColor: color2}} />
					</div>
				</div> */}
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					marginLeft: '-58rem',
					marginTop: '10rem',
					transform: `translateY(${opacity}px)`,
				}}
			>
				<svg
					xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
					xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
					xmlns:cc="http://creativecommons.org/ns#"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xmlns:dc="http://purl.org/dc/elements/1.1/"
					xmlns:svg="http://www.w3.org/2000/svg"
					xmlns:ns1="http://sozi.baierouge.fr"
					id="svg3059"
					sodipodi:docname="pink_balloon.svg"
					viewBox="0 0 263.16 923.89"
					version="1.1"
					inkscape:version="0.48.1 r9760"
				>
					<defs id="defs3061">
						<filter
							id="filter3961"
							height="1.2083"
							width="1.4792"
							colorInterpolationFilters="sRGB"
							y="-.10416"
							x="-.23960"
							inkscape:collect="always"
						>
							<feGaussianBlur
								id="feGaussianBlur3963"
								stdDeviation="14.438448"
								inkscape:collect="always"
							/>
						</filter>
					</defs>
					<g
						id="layer1"
						inkscape:label="Layer 1"
						transform="translate(-651.28 -35.633)"
						inkscape:groupmode="layer"
					>
						<g id="g3277">
							<g id="g3965" transform="matrix(.72886 0 0 .72886 594.67 100.02)">
								<g id="g3797" transform="translate(-75.901 -162.06)">
									<path
										id="path2985"
										style={{fill: 'white'}}
										inkscape:connector-curvature="0"
										d="m334.12 91.969c-13.435 0.000003-26.549 2.0694-38.906 5.9688-12.357 3.8993-23.949 9.6016-34.625 16.844-10.676 7.2421-20.427 16.005-29.312 25.969-8.8854 9.9639-16.93 21.142-24.281 33.25-7.3511 12.108-14.011 25.157-20.125 38.969-6.114 13.811-11.685 28.386-16.531 43.656-4.8463 15.27-8.9841 31.235-11.969 47.938-2.9846 16.702-4.8044 34.146-4.8125 52.438-0.008 18.292 1.8436 36.574 5.625 54.844 3.7814 18.269 9.5052 36.501 16.844 54.562 7.3385 18.061 16.285 35.965 26.125 53.344 9.8402 17.378 20.558 34.246 31.312 50.188 10.755 15.941 21.514 30.936 31.594 44.469 10.079 13.532 19.45 25.589 27.844 35.625 8.3936 10.036 15.795 18.06 22.5 23.531 4.3146 3.5202 8.3569 5.9672 12.312 7.2812-4.0805 7.2643-8.8776 13.974-16.219 20.938 18.76-3.2214 25.452-0.38353 45.188 2.25-9.0267-6.2557-12.499-13.561-16.812-22.875 4.2537-1.2131 8.5733-3.7712 13.219-7.5625 6.6912-5.4609 14.068-13.472 22.438-23.5 8.3698-10.028 17.73-22.068 27.781-35.594 10.052-13.526 20.771-28.531 31.5-44.469s21.428-32.81 31.25-50.188c9.8216-17.377 18.764-35.249 26.094-53.312 7.3298-18.063 13.03-36.321 16.812-54.594 3.7829-18.273 5.6547-36.578 5.6562-54.875 0.002-18.297-1.8088-35.73-4.7812-52.438-2.9725-16.708-7.1015-32.693-11.938-47.969-4.836-15.276-10.392-29.84-16.5-43.656-6.1083-13.816-12.774-26.888-20.125-39-7.35-12.11-15.39-23.28-24.28-33.25s-18.63-18.73-29.31-25.97-22.3-12.94-34.66-16.842c-12.36-3.9-25.47-5.969-38.91-5.969z"
									/>
								</g>
								<path
									id="path3803"
									d="m307.71-49.233c102.62 90.994 99.78 239.97 90.26 328.22-5.47-87.82-34.33-192.89-112.83-256.42-64.711-52.375 2.6382-89.468 22.565-71.799z"
									sodipodi:nodetypes="scss"
									style={{
										opacity: 0.1,
										filter: 'url(#filter3961);fill:#00000',
									}}
									inkscape:connector-curvature="0"
								/>
							</g>
							<path
								id="path3971"
								style={{stroke: 'white', fill: 'none'}}
								strokeWidth="9"
								//	Style="stroke:#707070;stroke-width:9.1866;fill:none"
								d="m778.09 478.47 8.8541 0.37743c-6.9021 14.109-13.429 28.402-19.571 42.858-7.9339 18.674-15.259 37.733-19.306 57.615-4.0467 19.882-4.7158 40.732 0.59059 60.315 4.6071 17.002 13.508 32.459 21.165 48.323 7.6578 15.864 14.247 32.896 13.671 50.502-0.67203 20.553-11.067 39.607-23.638 55.881s-27.523 30.635-39.592 47.285c-24.408 33.675-36 76.408-31.956 117.8"
								sodipodi:nodetypes="cczcaac"
								inkscape:path-effect="#path-effect3973"
								inkscape:connector-curvature="0"
								inkscape:original-d="m 778.09176,478.46888 8.85408,0.37743 c 0,0 -34.02813,18.31917 -19.57066,42.85786 14.45746,24.53871 -17.11899,90.39081 -18.71536,117.92983 -1.0873,41.71731 38.51335,64.09091 34.83623,98.82533 -4.24617,40.1097 -47.2499,66.13336 -63.22997,103.16652 -16.1196,37.3565 -31.95558,117.80064 -31.95558,117.80064"
							/>
						</g>
					</g>
				</svg>
				{/* <div className="balloon-g">
					<div
						className="balloon balloon-blue"
						style={{backgroundColor: 'white'}}
					>
						<div className="balloon-ref" />
						<div className="thread" style={{backgroundColor: 'white'}} />
					</div>
				</div> */}
			</AbsoluteFill>

			{/* <AbsoluteFill
				style={{
					marginLeft: '-17.5rem',
					marginTop: '2rem',
					transform: `translateY(${opacity}px)`,
				}}
			>
				<svg
					version="1.0"
					xmlns="http://www.w3.org/2000/svg"
					width="680.000000pt"
					// Height="939.000000pt"
					viewBox="0 0 1280.000000 1139.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<defs>
						<linearGradient id="solids" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{stopColor: 'red', stopOpacity: 1}} />
							<stop offset="33%" style={{stopColor: 'red', stopOpacity: 1}} />
							<stop offset="33%" style={{stopColor: 'red', stopOpacity: 1}} />
							<stop offset="67%" style={{stopColor: 'red', stopOpacity: 1}} />
							<stop offset="67%" style={{stopColor: 'red', stopOpacity: 1}} />
							<stop offset="100%" style={{stopColor: 'red', stopOpacity: 1}} />
						</linearGradient>
					</defs>
					<g
						transform="translate(0.000000,1139.000000) scale(0.100000,-0.100000)"
						fill="#ffb300"
						stroke="none"
					>
						<path
							d="M6000 10685 c-168 -31 -367 -101 -530 -187 -611 -323 -1019 -941
-1121 -1697 -36 -271 -17 -556 56 -843 57 -224 124 -402 243 -648 225 -465
662 -1104 1009 -1477 145 -157 440 -373 507 -373 9 0 20 -9 26 -19 11 -22 -23
-89 -131 -255 -71 -110 -74 -126 -21 -126 21 0 43 -5 50 -12 10 -10 48 -19
155 -35 37 -5 38 -7 31 -32 -11 -35 -17 -4073 -6 -4114 9 -36 35 -47 48 -20 5
10 11 926 14 2065 3 1345 8 2050 15 2057 7 6 40 3 98 -11 l89 -20 39 38 c22
22 72 55 112 75 50 25 73 42 75 56 2 13 -22 52 -69 109 -93 116 -149 199 -149
221 0 12 18 26 57 43 203 87 479 354 773 745 239 319 489 717 646 1029 242
480 328 804 328 1226 -1 384 -37 615 -142 895 -49 132 -147 323 -225 440 -306
459 -799 789 -1298 870 -123 20 -569 20 -679 0z"
						/>
					</g>
				</svg>
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					marginLeft: '-8rem',
					marginTop: '12rem',
					transform: `translateY(${opacity}px)`,
				}}
			>
				<svg
					version="1.0"
					xmlns="http://www.w3.org/2000/svg"
					width="680.000000pt"
					// Height="939.000000pt"
					viewBox="0 0 1280.000000 1139.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<g
						transform="translate(0.000000,1139.000000) scale(0.100000,-0.100000)"
						fill="#567d2e"
						stroke="none"
					>
						<path
							d="M6000 10685 c-168 -31 -367 -101 -530 -187 -611 -323 -1019 -941
-1121 -1697 -36 -271 -17 -556 56 -843 57 -224 124 -402 243 -648 225 -465
662 -1104 1009 -1477 145 -157 440 -373 507 -373 9 0 20 -9 26 -19 11 -22 -23
-89 -131 -255 -71 -110 -74 -126 -21 -126 21 0 43 -5 50 -12 10 -10 48 -19
155 -35 37 -5 38 -7 31 -32 -11 -35 -17 -4073 -6 -4114 9 -36 35 -47 48 -20 5
10 11 926 14 2065 3 1345 8 2050 15 2057 7 6 40 3 98 -11 l89 -20 39 38 c22
22 72 55 112 75 50 25 73 42 75 56 2 13 -22 52 -69 109 -93 116 -149 199 -149
221 0 12 18 26 57 43 203 87 479 354 773 745 239 319 489 717 646 1029 242
480 328 804 328 1226 -1 384 -37 615 -142 895 -49 132 -147 323 -225 440 -306
459 -799 789 -1298 870 -123 20 -569 20 -679 0z"
						/>
					</g>
				</svg>
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					marginLeft: '-27rem',
					marginTop: '12rem',
					transform: `translateY(${opacity}px)`,
				}}
			>
				<svg
					version="1.0"
					xmlns="http://www.w3.org/2000/svg"
					width="680.000000pt"
					// Height="939.000000pt"
					viewBox="0 0 1280.000000 1139.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<g
						transform="translate(0.000000,1139.000000) scale(0.100000,-0.100000)"
						fill="white"
						stroke="none"
					>
						<path
							d="M6000 10685 c-168 -31 -367 -101 -530 -187 -611 -323 -1019 -941
-1121 -1697 -36 -271 -17 -556 56 -843 57 -224 124 -402 243 -648 225 -465
662 -1104 1009 -1477 145 -157 440 -373 507 -373 9 0 20 -9 26 -19 11 -22 -23
-89 -131 -255 -71 -110 -74 -126 -21 -126 21 0 43 -5 50 -12 10 -10 48 -19
155 -35 37 -5 38 -7 31 -32 -11 -35 -17 -4073 -6 -4114 9 -36 35 -47 48 -20 5
10 11 926 14 2065 3 1345 8 2050 15 2057 7 6 40 3 98 -11 l89 -20 39 38 c22
22 72 55 112 75 50 25 73 42 75 56 2 13 -22 52 -69 109 -93 116 -149 199 -149
221 0 12 18 26 57 43 203 87 479 354 773 745 239 319 489 717 646 1029 242
480 328 804 328 1226 -1 384 -37 615 -142 895 -49 132 -147 323 -225 440 -306
459 -799 789 -1298 870 -123 20 -569 20 -679 0z"
						/>
					</g>
				</svg>
			</AbsoluteFill> */}

			{/* Right Side */}

			<AbsoluteFill
				style={{
					marginLeft: '98rem',
					marginTop: '2rem',
				}}
			>
				<AbsoluteFill
					style={{
						marginLeft: '-17.5rem',
						marginTop: '2rem',
						transform: `translateY(${opacity}px)`,
					}}
				>
					<svg
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="680.000000pt"
						// Height="939.000000pt"
						viewBox="0 0 1280.000000 1139.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,1139.000000) scale(0.100000,-0.100000)"
							fill="#ffb300"
							stroke="none"
						>
							<path
								d="M6000 10685 c-168 -31 -367 -101 -530 -187 -611 -323 -1019 -941
-1121 -1697 -36 -271 -17 -556 56 -843 57 -224 124 -402 243 -648 225 -465
662 -1104 1009 -1477 145 -157 440 -373 507 -373 9 0 20 -9 26 -19 11 -22 -23
-89 -131 -255 -71 -110 -74 -126 -21 -126 21 0 43 -5 50 -12 10 -10 48 -19
155 -35 37 -5 38 -7 31 -32 -11 -35 -17 -4073 -6 -4114 9 -36 35 -47 48 -20 5
10 11 926 14 2065 3 1345 8 2050 15 2057 7 6 40 3 98 -11 l89 -20 39 38 c22
22 72 55 112 75 50 25 73 42 75 56 2 13 -22 52 -69 109 -93 116 -149 199 -149
221 0 12 18 26 57 43 203 87 479 354 773 745 239 319 489 717 646 1029 242
480 328 804 328 1226 -1 384 -37 615 -142 895 -49 132 -147 323 -225 440 -306
459 -799 789 -1298 870 -123 20 -569 20 -679 0z"
							/>
						</g>
					</svg>
				</AbsoluteFill>

				<AbsoluteFill
					style={{
						marginLeft: '-8rem',
						marginTop: '12rem',
						transform: `translateY(${opacity}px)`,
					}}
				>
					<svg
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="680.000000pt"
						// Height="939.000000pt"
						viewBox="0 0 1280.000000 1139.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,1139.000000) scale(0.100000,-0.100000)"
							fill="#567d2e"
							stroke="none"
						>
							<path
								d="M6000 10685 c-168 -31 -367 -101 -530 -187 -611 -323 -1019 -941
-1121 -1697 -36 -271 -17 -556 56 -843 57 -224 124 -402 243 -648 225 -465
662 -1104 1009 -1477 145 -157 440 -373 507 -373 9 0 20 -9 26 -19 11 -22 -23
-89 -131 -255 -71 -110 -74 -126 -21 -126 21 0 43 -5 50 -12 10 -10 48 -19
155 -35 37 -5 38 -7 31 -32 -11 -35 -17 -4073 -6 -4114 9 -36 35 -47 48 -20 5
10 11 926 14 2065 3 1345 8 2050 15 2057 7 6 40 3 98 -11 l89 -20 39 38 c22
22 72 55 112 75 50 25 73 42 75 56 2 13 -22 52 -69 109 -93 116 -149 199 -149
221 0 12 18 26 57 43 203 87 479 354 773 745 239 319 489 717 646 1029 242
480 328 804 328 1226 -1 384 -37 615 -142 895 -49 132 -147 323 -225 440 -306
459 -799 789 -1298 870 -123 20 -569 20 -679 0z"
							/>
						</g>
					</svg>
				</AbsoluteFill>

				<AbsoluteFill
					style={{
						marginLeft: '-27rem',
						marginTop: '12rem',
						transform: `translateY(${opacity}px)`,
					}}
				>
					<svg
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="680.000000pt"
						// Height="939.000000pt"
						viewBox="0 0 1280.000000 1139.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,1139.000000) scale(0.100000,-0.100000)"
							fill="#567d2e"
							stroke="none"
						>
							<path
								d="M6000 10685 c-168 -31 -367 -101 -530 -187 -611 -323 -1019 -941
-1121 -1697 -36 -271 -17 -556 56 -843 57 -224 124 -402 243 -648 225 -465
662 -1104 1009 -1477 145 -157 440 -373 507 -373 9 0 20 -9 26 -19 11 -22 -23
-89 -131 -255 -71 -110 -74 -126 -21 -126 21 0 43 -5 50 -12 10 -10 48 -19
155 -35 37 -5 38 -7 31 -32 -11 -35 -17 -4073 -6 -4114 9 -36 35 -47 48 -20 5
10 11 926 14 2065 3 1345 8 2050 15 2057 7 6 40 3 98 -11 l89 -20 39 38 c22
22 72 55 112 75 50 25 73 42 75 56 2 13 -22 52 -69 109 -93 116 -149 199 -149
221 0 12 18 26 57 43 203 87 479 354 773 745 239 319 489 717 646 1029 242
480 328 804 328 1226 -1 384 -37 615 -142 895 -49 132 -147 323 -225 440 -306
459 -799 789 -1298 870 -123 20 -569 20 -679 0z"
							/>
						</g>
					</svg>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};

export default BalloonTest;
