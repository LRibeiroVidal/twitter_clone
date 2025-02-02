import * as React from "react";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { formatLikes } from "../../utils/format";
import "./Tweet.css";

export default function Tweet({ tweet, increaseLikes }) {
	const [isLiked, setIsLiked] = React.useState(false);

	return (
		<div className="tweet" data-tweet-id={tweet.id}>
			<div className="tweet-avatar">
				<AvatarIcon />
			</div>

			<div className="tweet-content">
				<TweetUserInfo name={tweet.name} handle={tweet.handle} />
				<p className="tweet-text">{tweet.text}</p>
				<TweetFooter
					numComments={tweet.comments}
					numRetweets={tweet.retweets}
					numLikes={tweet.likes}
					increaseLikes={increaseLikes}
					id={tweet.id}
					isLiked={isLiked}
					setIsLiked={setIsLiked}
				/>
			</div>
		</div>
	);
}

export function TweetUserInfo({ name, handle }) {
	return (
		<div className="tweet-user-info">
			<div className="meta">
				<p className="name">{name}</p>
				<span className="handle">@{handle}</span>
				<span className="dot">•</span>
				<span className="ts">1 min</span>
			</div>
			<i className="fa fa-angle-down"></i>
		</div>
	);
}

export function TweetFooter({
	numComments,
	numRetweets,
	numLikes,
	increaseLikes,
	id,
	isLiked,
	setIsLiked,
}) {
	return (
		<div className="tweet-footer">
			<span>
				<i className="fa fa-comment"></i>
				{numComments || 0}
			</span>
			<span>
				<i className="fa fa-retweet"></i>
				{numRetweets}
			</span>
			<span
				onClick={() => {
					var wasLiked = increaseLikes(id);
					setIsLiked(wasLiked);
				}}
			>
				<i
					className="fas fa-heart heart"
					style={{
						color: isLiked ? "#f80051" : "gray",
					}}
				></i>
				{formatLikes(numLikes)}
			</span>
			<span>
				<i className="fa fa-envelope"></i>
			</span>
		</div>
	);
}
