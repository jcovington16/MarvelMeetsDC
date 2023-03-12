import { Profiles } from '@lens-protocol/react-native-lens-ui-kit';

export default function ProfileComponent({
    navigation
  }) {
    return (
      <Profiles
        signedInUserAddress='0x01b4b603a24931d77974C07257FA8041441A7596'
        onProfilePress={
            profile => navigation.navigate(
                "Profile", {profile}
            )
        } />
    )
  }