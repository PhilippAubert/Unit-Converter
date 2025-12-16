//TODO: 



/***
 * run express server
 * local_host?! 
 * ENDPOINTS: 
 * 
 * 
 * 
 *              GET/length => form: length! 
 *              POST/(ONCLICK!) => body: {
 *                      value: number,
 *                      from: string (enum!)
 *                      to: string(enum) ((validate: from === to ? error : continue))
 *                  }
 *              return conversion! 
 *                  // redirect to measure! urlParams 
 *                  // reset ! => redirect zur domain ("/length")
 *              
 *              
 * 
 *              GET/weight => form: length! 
 *              POST/ 
 * 
 *              GET/temperature => form: length! 
 *              POST/
 * 
 *                     ┌───────────────────────────────┐
                       │       Browser Request         │
                       │  GET /length (or reset)       │
                       └─────────────┬─────────────────┘
                                     │
                                     ▼
                       ┌───────────────────────────────┐
                       │       Server Receives GET     │
                       │  - Decides Form State         │
                       │  - Returns HTML with:         │
                       │    • Form visible             │
                       │    • Result hidden            │
                       └─────────────┬─────────────────┘
                                     │
                                     ▼
                       ┌─────────────────────────────── ┐
                       │       Browser Renders Page     │
                       │  - User sees empty form        │
                       │  - Header / nav / footer static│
                       └─────────────┬───────────────── ┘
                                     │
                 User fills form and clicks Convert
                                     │
                                     ▼
                       ┌───────────────────────────────┐
                       │       Form Submitted POST     │
                       │        target="_self"         │
                       └─────────────┬─────────────────┘
                                     │
                                     ▼
                       ┌───────────────────────────────┐
                       │       Server Receives POST    │
                       │  - Reads input value & units  │
                       │  - Performs conversion        │
                       │  - Decides Result State       │
                       │  - Returns HTML with:         │
                       │    • Result populated         │
                       │    • Form cleared             │
                       │    • Reset button visible     │
                       └─────────────┬─────────────────┘
                                     │
                                     ▼
                       ┌───────────────────────────────┐
                       │       Browser Displays Result │
                       │  - Conversion result visible  │
                       │  - Form hidden / cleared      │
                       │  - Reset button visible       │
                       │  - JS can enhance UX:         │
                       │    • Animate transitions      │
                       │    • Scroll into view         │
                       └─────────────┬─────────────────┘
                                     │
             User clicks Reset Button (or navigation link)
                                     │
                                     ▼
                       ┌──────────────────────────────  ┐
                       │       Server Receives GET      │
                       │  - Returns Form State          │
                       │  - Result hidden               │       
                       └─────────────┬────────────────  ┘
                                     │
                                     ▼
                       ┌───────────────────────────────┐
                       │       Browser Renders Page     │
                       │  - Back to empty form state    │
                       │  - Header / nav / footer static│
                       └───────────────────────────────┘

 *  
 */