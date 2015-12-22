module angularWithTS.Interfaces {

    export interface IPlaylistService {
        getPlayList: () => Array<ITrack>;
    }

    export interface ITrack {
        id: number;
        title: string;
        artist: string;
        rating: number;
    }
}