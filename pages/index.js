import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ReactPlayer from 'react-player';

export default function Home() {
	return (
		<div>
			<Head>
				<title>YT-Single-channel-only</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<ReactPlayer
					className='react-player'
					url='https://www.youtube.com/watch?v=XdvdLo3IC8s&list=UUaUPjphSCehRXTnGvgmaOZA&index=2s://www.youtube.com/watch?v=XdvdLo3IC8s&list=UUaUPjphSCehRXTnGvgmaOZA&index=2'
					controls
					playing
				/>
			</div>
		</div>
	);
}
