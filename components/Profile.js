import { Profiles } from '@lens-protocol/react-native-lens-ui-kit';

export default function ProfileComponent({
    navigation
  }) {
    return (
      <Profiles
        onProfilePress={
            profile => navigation.navigate(
                "Profile", {profile}
            )
        } />
    )
  }