import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";
import UserProfile from "../UserProfile/UserProfile";

var charsLeft = 140;
export default function TweetBox({
	tweets,
	userProfile,
	setTweets,
	tweetText,
	setTweetText,
}) {
	function handleOnTweetTextChange(evt) {
		setTweetText(evt.target.value);
	}

	const isDisabled = tweetText.length === 0 || tweetText.length > 140;

	function handleOnSubmit() {
		var newTweet = {
			name: userProfile.name,
			handle: userProfile.handle,
			text: tweetText,
			comments: 0,
			retweets: 0,
			likes: 0,
			id: tweets.length,
		};

		setTweets([...tweets, newTweet]);
		setTweetText("");
	}

	return (
		<div className="tweet-box">
			<TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange} />

			<div className="tweet-box-footer">
				<TweetBoxIcons />
				<TweetCharacterCount text={tweetText} />
				<TweetSubmitButton
					isDisabled={isDisabled}
					handleOnSubmit={handleOnSubmit}
				/>
			</div>
		</div>
	);
}

export function TweetBoxIcons() {
	return (
		<div className="tweet-box-icons">
			<i className="fas fa-image"></i>
			<i className="icon-gif">GIF</i>
			<i className="far fa-chart-bar"></i>
			<i className="fas fa-map-marker-alt"></i>
		</div>
	);
}

export function TweetCharacterCount({ text }) {
	// ADD CODE HERE
	const MAX_CHARS = 140;
	charsLeft = MAX_CHARS - text.length;
	return <span>{charsLeft == 140 ? "" : charsLeft}</span>;
}

export function TweetSubmitButton({ handleOnSubmit, isDisabled }) {
	return (
		<div className="tweet-submit">
			<i className="fas fa-plus-circle"></i>
			<button
				className={"tweet-submit-button"}
				disabled={isDisabled}
				onClick={handleOnSubmit}
			>
				Tweet
			</button>
		</div>
	);
}
