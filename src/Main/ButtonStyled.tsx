/* eslint-disable react/require-default-props */
import * as React from 'react'
import { styled, Theme } from '@mui/system'
import { buttonUnstyledClasses, ButtonUnstyledProps, ButtonUnstyled } from '@mui/base'
import { useDarkMode } from 'next-dark-mode'

const ButtonRoot = React.forwardRef(
  (
    props: React.PropsWithChildren<{ width: number; height: number }>,
    ref: React.ForwardedRef<any>
  ) => {
    const { width, height, children, ...other } = props
    const pointBg = `0,${height} 0,0 ${width},0 ${width},${height}`

    return (
      <svg width={width} height={height} {...other} ref={ref}>
        <polygon points={pointBg} className="bg" />
        <polygon points={pointBg} className="borderEffect" />
        <foreignObject x="0" y="0" width={width} height={height}>
          <div className="content">{children}</div>
        </foreignObject>
      </svg>
    )
  }
)

const mainColor = {
  50: '#d7d7d7',
  100: '#d5d0d0',
  200: '#d3d1cc',
  400: '#d1cec4',
  500: '#cfcbbd',
  600: '#cdc7b2',
  800: '#cdc4a6',
  900: '#CCBF90'
}
// --main-color: ${
//   theme.palette.mode === 'light' ? mainColor[600] : mainColor[100]
// };
// --hover-color: ${
//   theme.palette.mode === 'light' ? mainColor[50] : mainColor[900]
// };
// --active-color: ${
//   theme.palette.mode === 'light' ? mainColor[100] : mainColor[800]
// };
const CustomFullyButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `

  overflow: visible;
  cursor: pointer;
  --main-color: ${mainColor[100]};
  --hover-color: ${mainColor[900]};
  --active-color: ${mainColor[800]};
  --back-color: ${'#d5d0d0c2'};
  background-color: var(--back-color);

  & polygon {
    fill: transparent;
    transition: all 1000ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--hover-color);
    stroke-width: 2.5;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2.5px solid ${mainColor[400]};
    outline-offset: 2.5px;
  }

  &.${buttonUnstyledClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 600ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size:  1.2em;
      font-family: Fira Sans, serif;
           font-weight: 900;
      line-height: 2;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      // color:${theme.palette.mode !== 'dark' ? 'white' : 'black'};

    }

    & svg {
      margin: 0 5px;
    }
  }`
)
const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `

  overflow: visible;
  cursor: pointer;
  --main-color: ${mainColor[100]};
  --hover-color: ${mainColor[900]};
  --active-color: ${mainColor[800]};


  & polygon {
    fill: transparent;
    transition: all 1000ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--hover-color);
    stroke-width: 2.5;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2.5px solid ${mainColor[400]};
    outline-offset: 2.5px;
  }

  &.${buttonUnstyledClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 60ms ease-out;

    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size:  1.2em;
      font-family: Fira Sans, serif;
      font-weight: 900;
      line-height: 2;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      // color:${theme.palette.mode !== 'dark' ? 'white' : 'black'};

    }

    & svg {
      margin: 0 5px;
    }
  }`
)

interface SvgCustomProps extends ButtonUnstyledProps {
  image?: any
  style?: any
  onClick?: () => void
  color?: string
  width: number
  height: number
  fullybackground?: number
}

const SvgButton = React.forwardRef((props: SvgCustomProps, ref: React.ForwardedRef<any>) => (
  <ButtonUnstyled
    {...props}
    component={props.fullybackground === 1 ? CustomFullyButtonRoot : CustomButtonRoot}
    ref={ref}
  />
))

interface ButtonCustom {
  image?: any
  title: string
  style?: any
  onClick?: () => void
  color?: string
  width?: number
  height?: number
  fullybackground?: number
  startIcon?: any
}
export default function UnstyledButtonCustom(props: ButtonCustom) {
  const { image, title, style, onClick, color, width, height, fullybackground, startIcon } = props
  const { darkModeActive } = useDarkMode()
  let xcolor = color
  if (!color) {
    xcolor = darkModeActive ? 'white' : 'black'
  }

  return (
    <>
      <SvgButton
        width={width ?? 150}
        height={height ?? 50}
        color={xcolor}
        onClick={onClick}
        style={style}
        image={image}
        fullybackground={fullybackground}
      >
        {startIcon}
        {title}
      </SvgButton>
    </>
  )
}
