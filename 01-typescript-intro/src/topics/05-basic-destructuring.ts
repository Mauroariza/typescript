interface Details{
    author:string;
    year:number;
}


interface AudioPlayer{

    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details
}

const audioPlayer:AudioPlayer = {
    audioVolume: 100,
    songDuration: 300,
    song: 'La chona',
    details:{
        author:'Los tucanes de Tijuana',
        year:1995
    }

}



//podría hacerlo sin desestructuración
 const song = audioPlayer.song;
 const author = audioPlayer.details.author;
 //sin embargo con desestructuración es más sencillo
    const {songDuration:duration,song: song2, details:{author:author2}}:
    {songDuration:number, song:string,details:{author:string}} = audioPlayer;

    console.log(song2, author2);
    console.log(duration);


const dbz:string[] = ['Goku','Vegeta','Trunks'];
console.log(dbz[0]);
console.log('personaje 3:',dbz[1]);    


    //Desestructuración de Arrays

const[, ,trunks,gohan='not found'] = dbz;


console.log(trunks);