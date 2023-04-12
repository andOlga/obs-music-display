# obs-music-display

![ezgif-4-19d3f2a232](https://user-images.githubusercontent.com/462484/231411195-22e93270-d454-45bb-94a7-859086fd9f12.gif)

This is a small tool for the OBS Browser Source, meant to play music on a stream, and show the name of the new track and its author as songs change in a small, temporary pop-up.

No external applications or OBS plug-ins are required for this to function. Your music is simply played by `obs-music-display` itself, via an `HTMLAudioElement`.
Therefore, this does not work with any streaming services, but I would not recommend playing copyrighted music on a stream anyway. You will need locally stored music, located in a `music` subfolder.

A web server is not required to serve `index.html`. The application is CORS-free and you can just point OBS directly to the file.

A `playlist.txt` file must be generated first. You can either run `genplaylist.js` for this via Node, or manually edit the provided sample file.
