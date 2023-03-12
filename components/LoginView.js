import {
    SignInWithLens, Theme, Size
  } from '@lens-protocol/widgets-react'
  
  async function onSignIn(tokens, profile) {
    console.log('tokens: ', tokens)
    console.log('profile: ', profile)
  }
  
  export default function LoginView({
    
  }) {
    return (
      <SignInWithLens
      onSignIn={onSignIn}
    />
    )
  }
