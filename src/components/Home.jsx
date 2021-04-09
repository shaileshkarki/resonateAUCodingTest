import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';
var parse = require('html-react-parser');

function Home() {
    const [tweets, setTweets] = useState([]);


    useEffect(() => {
        try {
            axios.get(`http://localhost:4000/resonateau`, {}).then(response => {
                setTweets(response.data);
                console.log("reached here");
                // console.log(tweets);
                console.log(response);
            })
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        } 
    }, []);

    return (
        <div>
            <h1>{tweets.length>0?`${tweets[0].user.name}, ${tweets[0].user.location}`:``}</h1>
            {tweets.length>0?<h2><a href={`${tweets[0].user.entities.url.urls[0].expanded_url}`}>Click to visit company website</a></h2>:``}           
            {tweets.map((tweet,index) => {
            return(
                <Card style={{ width: '90%', marginLeft:'5%', marginTop:'1rem',fontSize:"1.5rem"}}>
                <Card.Body>
                  <Card.Title style={{fontSize:"2rem", fontWeight:'bolder'}}>{`Created On:   
                      ${tweet.created_at}`}
                  </Card.Title>
                  <Card.Body>{tweet.text}</Card.Body>
                  <Card.Body>{tweet.user.description}</Card.Body>
                  <Card.Link href={tweet.entities.urls.url}>See on Twitter</Card.Link>
                </Card.Body>
              </Card>
            )
            })}
        </div>
    )
}

export default Home
