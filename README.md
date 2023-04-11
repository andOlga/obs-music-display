# obs-music-display

This is a small tool for the OBS Browser Source, meant to play music on a stream, and show the name of the new track and its author as songs change in a small, temporary pop-up.

No external applications or OBS plug-ins are required for this to function. Your music is simply played by `obs-music-display` itself, via an `<audio>` tag.
Therefore, this does not work with any streaming services, but those are garbage anyway. You will need locally stored music, located in a `music` subfolder.

A web server is not required to serve `index.html`. The application is CORS-free and you can just point OBS directly to the file.

A `playlist.txt` file must be generated first. You can either run `genplaylist.js` for this via Node, or manually edit the provided sample file.
