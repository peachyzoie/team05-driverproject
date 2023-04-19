/* 
* The 'head' file containing Metadata is deprecated after version 13.2.
* We are curently using version 13.1.6. 
* We need to decide whether to upgrade to 13.2 or stay with 13.1.6 techniques. 
 */

export default function Head() {
    return (
        <>
            <title>Top 50 Audio Books</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="Created by The Brogrammers" />
            <link rel="icon" href="/truck-icon-31.ico" />
        </>
    )
}