import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const profileCard = (props) => {

  const { img, name, meta, desc, extra } = props;
  
  return <Card
    image={img}
    header={name}
    meta={meta}
    description={desc}
    extra={extra}
  />
}

export default profileCard
