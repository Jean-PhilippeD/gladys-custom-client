
module.exports = {
    gladys: {
        gladysUrl: process.env.GLADYS_URL || 'http://localhost:8080',
        token: process.env.GLADYS_TOKEN || '3fb5818896eac050f705ef7dce59c1653edef8cd3' 

    },
    voicerss: {
		apiUrl: "https://api.voicerss.org/",
		speedRate: 0,
		audioFormat: "44khz_16bit_stereo",
		codec: "MP3",
		language: "fr-fr",
		cacheDirectory: "/home/pi/gladys-client/cache/",
		key: "3f914512a43b58e68cc51dae16885277"
    },
    token: '00f1bbc6e198a1e2796f1e1c07328a5a4fe45aa4'
};
