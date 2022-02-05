const global = (props) => ({
  body: {
    bg: 'background',
    bgGradient: 'linear(to bottom, rgba(171, 26, 255,0.35) 0%, rgba(171, 26, 255,0.22) 5%, rgba(171, 26, 255,0.12) 20%, rgba(171, 26, 255,0.05) 35%, rgba(171, 26, 255,0.0))',
    backgroundRepeat: 'no-repeat',
    color: 'grey.200',
    fontSize: ['14px', '16px']
  },
  h1: {
    color: '#fff',
    fontSize: ['36px', '48px'],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: -0.4
  },
  h2: {
    color: '#fff',
    fontSize: ['26px', '38px'],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: -0.4
  },
  p: {
    color: 'grey.100'
  }
})

const fonts = {
  body: "Source Sans Pro",
}

const textStyles = {
  fg: {
    color: 'grey.100',
  },
  bg: {
    color: 'grey.500',
  },
  'card-title': {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '110%',
    marginBottom: '0'
  },
  'card-detail': {
    fontSize: '19px',
  },
}

export { global, fonts, textStyles }