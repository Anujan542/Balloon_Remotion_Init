import {Composition} from 'remotion';
import {BalloonTemplate} from './HelloWorld';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={BalloonTemplate}
				durationInFrames={500}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
