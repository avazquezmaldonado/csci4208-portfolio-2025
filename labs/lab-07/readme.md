# Lab 07 – Browser Database and Sync

### What I Built
In this lab, I implemented a small browser-based database system that supports storing, syncing, and merging local data using JavaScript modules. The lab introduced the concept of adapters for different storage backends such as in-memory, localStorage, and JSONBin. I tested and verified the syncing process using provided test files like `test-sync.html` and `test-jsonbin.html`.

### What Was Tricky
The most challenging part was getting the JSONBin adapter to work correctly with the PUT and GET requests. I also had to pay close attention to the `binId` configuration and ensure that the tests were run in the correct order (`boot local`, `boot cloud`, `run sync tests`). Another challenge was understanding how local state merged with remote data during synchronization.

### What I Would Improve
If I had more time, I would improve the visual feedback for the sync process and show clearer messages when sync succeeds or fails. I would also add better error handling for network issues and organize the code to make the adapter logic more reusable.

### Reflection
This lab helped me understand how client-side storage works and how browser apps can function offline by using local data first, then syncing with a cloud source later. It also reinforced the importance of modular design and clear separation between data models, adapters, and sync logic.