import React from 'react';
import ProfileCard from './ProfileCard';

export default function ProfileList(props) {
	return (
		<div>
			<div>
				{props.profiles.map((profile, key) => (
					<ProfileCard
						key={key}
						name={profile.name}
						id={profile.id}
						getPostbyId={props.getPostbyId}
						website={profile.website}
					/>
				))}
			</div>
		</div>
	);
}
