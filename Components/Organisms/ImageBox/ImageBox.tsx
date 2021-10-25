import { ImageBoxProps } from './ImageBox.props'
import {
  ContentBox,
  ContentBoxText,
  ContextSubTitle,
  MockImage,
  WrapperImageHome,
} from './ImageBox.style'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

const ImageBox = ({ item }: ImageBoxProps): JSX.Element => {
  const [xValue, setXValue] = useState<number | string>(0)
  const router = useRouter()

  const onNewPage = (id?: string) => {
    setXValue('150%')
    setTimeout(() => {
      router.push(`/${id}`)
    }, 700)
  }

  return (
    <ContentBox
      as={motion.div}
      transition={{ ease: 'easeIn', duration: 0.5 }}
      initial={{ y: '-300%', opacity: 0 }}
      animate={{ x: xValue, y: 0, opacity: 1 }}
      key={item._id}
      onClick={() => onNewPage(item._id)}
    >
      <WrapperImageHome>
        <MockImage src={item.photo} alt="mock" loading="lazy" />
      </WrapperImageHome>
      <ContentBoxText>{item.title}</ContentBoxText>
      <ContextSubTitle>{item.text}</ContextSubTitle>
    </ContentBox>
  )
}

export default ImageBox
