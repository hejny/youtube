import { downloadYoutubeAsMp3 } from './tools/YoutubeDL';

async function main() {
    console.log('App running...');

    const inputCwdElement = document.getElementById('cwd') as HTMLInputElement;
    const inputUrlsElement = document.getElementById(
        'urls',
    ) as HTMLTextAreaElement;
    const inputOutputElement = document.getElementById(
        'output',
    ) as HTMLDivElement;
    const buttonDownloadElement = document.getElementById(
        'download',
    ) as HTMLButtonElement;

    console.log('inputCwdElement', inputCwdElement);
    console.log('inputUrlsElement', inputUrlsElement);
    console.log('inputOutputElement', inputOutputElement);
    console.log('buttonDownloadElement', buttonDownloadElement);

    buttonDownloadElement.addEventListener('click', async () => {
        let downloaded = false;
        for (const url of inputUrlsElement.value.split('\n').map((n)=>n.trim()).filter((n)=>n!=='')) {
            try {
                await downloadYoutubeAsMp3(url, inputCwdElement.value);
                downloaded = true;
            } catch (error) {}

            inputOutputElement.innerHTML += `<p>${url} - ${
                downloaded ? 'OK' : 'Error'
            }</p>`;
        }
    });
}

main();
