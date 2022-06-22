import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox, { TweetSubmitButton } from "../TweetBox/TweetBox";
import "./Feed.css";

export default function Feed({
	tweets,
	userProfile,
	setTweets,
	tweetText,
	setTweetText,
}) {
	return (
		<div className="col feed">
			{/* UPDATE TWEET BOX PROPS HERE */}
			<TweetBox
				userProfile={userProfile}
				setTweets={setTweets}
				tweets={tweets}
				setTweetText={setTweetText}
				tweetText={tweetText}
			/>

			<div className="see-new-tweets beet">
				<p>
					See <span>{13}</span> New Tweets
				</p>
			</div>

			<div className="twitter-feed">
				{tweets.map((tweet, idx) => {
					return <Tweet key={idx} tweet={tweet} />;
				})}
			</div>
		</div>
	);
}
