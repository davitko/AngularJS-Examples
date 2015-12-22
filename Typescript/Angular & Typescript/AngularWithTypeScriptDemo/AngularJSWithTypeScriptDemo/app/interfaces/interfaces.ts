﻿module angularWithTS.Interfaces {

    export interface IPlaylistService {
        getPlayList: () => Array<ITrack>;
        addItem: (item: angularWithTS.Interfaces.ITrack) => void;
        removeItem: (id: number) => void;
    }


    export interface ITrack {
        id: number;
        title: string;
        artist: string;
        rating: number;
    }
}