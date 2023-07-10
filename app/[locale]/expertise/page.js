import AreaOfExpertise from '@/components/Expertise/AreaOfExpertise'
import Hero from '@/components/Global/Hero'
import React from 'react'

const page = () => {
  return (
    <main>
<Hero isEdmr={false} title={"Areas of Expertise"} />
<AreaOfExpertise />
    </main>
  )
}

export default page