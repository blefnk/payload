import React from 'react'

import Button from '../../../../../src/admin/components/elements/Button/index.js'
// As this is the demo project, we import our dependencies from the `src` directory.
import MinimalTemplate from '../../../../../src/admin/components/templates/Minimal/index.js'
import { useConfig } from '../../../../../src/admin/components/utilities/Config/index.js'

// In your projects, you can import as follows:
// import { MinimalTemplate } from 'payload/components/templates';
// import { Button } from 'payload/components/elements';
// import { useConfig } from 'payload/components/utilities';

import './index.scss'

const baseClass = 'custom-minimal-route'

const CustomMinimalRoute: React.FC = () => {
  const {
    routes: { admin: adminRoute },
  } = useConfig()

  return (
    <MinimalTemplate className={baseClass}>
      <h1>Custom Route</h1>
      <p>Here is a custom route that was added in the Payload config.</p>
      <Button className={`${baseClass}__login-btn`} el="link" to={`${adminRoute}/login`}>
        Go to Login
      </Button>
      <Button buttonStyle="secondary" el="link" to={`${adminRoute}`}>
        Go to Dashboard
      </Button>
    </MinimalTemplate>
  )
}

export default CustomMinimalRoute