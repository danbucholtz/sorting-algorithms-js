/*
1. Jukeboxes sell credits in exchange for executing songs
2. Jukeboxes has a list of albums, each album has a list of songs
3. If a jukebox has enough credits, a song may be selected and added to a queue to be played
*/

class JukeBox {
  creditCost: number = 2;
  numCredits = 0;
  songQueue: Song[] = [];

  buyCredits(numDollars: number) {
    if (numDollars < this.creditCost) {
      throw Error(`Credits cost ${this.creditCost} dollars`);
    }
    this.numCredits = this.numCredits + Math.floor(numDollars/this.creditCost);
  }

  chooseSong(song: Song) {
    if (this.numCredits <= 0) {
      throw new Error('you need to buy some credits to play a song');
    }
    this.numCredits--;
    song.songCompleteDelegate = this.onDonePlayingSong;
    if (this.songQueue.length === 0) {
      song.start();
    }
    this.songQueue.push(song);
  }

  onDonePlayingSong(_song: Song) {
    // okay cool, the song is done, so go ahead
    // and remove it from the top of the list, and start the next
    if (this.songQueue.length > 0) {
      this.songQueue.shift();
    }
    if (this.songQueue.length > 0) {
      this.songQueue[0].start();
    }
  }

}

type SongCompleteDelegate = (song: Song) => void;

class Song {

  constructor(public songCompleteDelegate: SongCompleteDelegate) {
  }

  start() {
    // start playing the song
    setTimeout(() => {
      this.finish();
    }, 2000);
  }

  finish() {
    this.songCompleteDelegate && this.songCompleteDelegate(this);
  }
}