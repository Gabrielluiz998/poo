let musica0 = new Musicas(
    "Here Comes the Sun",
    "The Beatles",
    "https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2"
);

let musica1 = new Musicas(
    "Nothing Else Matters",
    "Metallica",
    "https://open.spotify.com/embed/track/0nLiqZ6A27jJri2VCalIUs"
);

let musica2 = new Musicas(
    "Linvin` On A Player",
    "Bon Jovi",
    "https://open.spotify.com/embed/track/37ZJ0p5Jm13JPevGcx4SkF"
);

let musica3 = new Musicas(
    "The Final Countdown",
    "Europe",
    "https://open.spotify.com/embed/track/3MrRksHupTVEQ7YbA0FsZK"
);

let musica4 = new Musicas(
    "Eye of the Tiger",
    "Survivor",
    "https://open.spotify.com/embed/track/2KH16WveTQWT6KOG9Rg6e2"
);

var listaDeMusicas = [];
listaDeMusicas.push(musica0, musica1, musica2, musica3, musica4);

for(let i = 0; i < listaDeMusicas.length; i++){
    document.write(`
        <div class="card">
            <iframe style="border-radius:12px";
                src=${listaDeMusicas[i].link}?theme=0;
                width="100%";
                height="352";
                frameBorder="0"; 
                allowfullscreen=""; 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"; 
                loading="lazy">
            </iframe>
        </div>
    `);
};

