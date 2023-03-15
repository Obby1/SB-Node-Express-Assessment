# Broken App Issues

1. JSON body parsing was missing.
   - Added app.use(express.json()); to enable JSON body parsing.

2. The 'catch' block was missing the 'err' parameter.
   - Changed 'catch' block to 'catch (err)'.

3. The 'results' variable was an array of Promises, but the code was not waiting for all the Promises to resolve before using the data.
   - Used Promise.all() to wait for all the Promises in the 'results' array to resolve before mapping to 'out'.

4. The axios.get() function was used inside the map() function, creating a new array of Promises instead of an array of objects.
   - Used Promise.all() with map() to correctly handle asynchronous requests and data retrieval.
