import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const profileCard = (data) => (
  <Card
    image={data.img}
    header={data.name}
    meta={data.meta}
    description={data.desc}
    extra={data.extra}
  />
)

export default profileCard
