// import { useMemo } from 'react'
import { useBreakpoint as useBreakpointPlugin } from 'use-breakpoint'

interface IUseBreakpoint {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

type TUseBreakpoint = () => IUseBreakpoint

const BREAKPOINTS = { isMobile: 0, isTablet: 769, isDesktop: 1025 }

export const useBreakpoint: TUseBreakpoint = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpointPlugin(
    BREAKPOINTS,
    'isDesktop',
  )
//   console.log(breakpoint, minWidth, maxWidth)

//   const res = useMemo(() => {
//     return {
//       isMobile: breakpoint === 'isMobile',
//       isTablet: breakpoint === 'isTablet',
//       isDesktop: breakpoint === 'isDesktop',
//     }
//   }, [breakpoint])

//   return res

  return {
    isMobile: breakpoint === 'isMobile',
    isTablet: breakpoint === 'isTablet',
    isDesktop: breakpoint === 'isDesktop',
  }
}
