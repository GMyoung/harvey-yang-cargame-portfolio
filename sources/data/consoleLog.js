import * as THREE from 'three/webgpu'

const text = `
Harvey Yang Car Game Portfolio

Thanks for visiting this experimental 3D portfolio.

This project adapts an MIT-licensed 3D portfolio base and replaces the portfolio content with Harvey Yang's AI automation, software engineering, and business analytics work.

Links:
- https://ko-fi.com/harveystudio#linkModal
- https://gmyoung.github.io/harvey-yang-portfolio/#systems
- https://gmyoung.github.io/GMyoung-harvey-atmospheric-portfolio/#contact
- https://harvey-agent-comparison-studio.fly.dev/
- https://github.com/GMyoung/GMyoung-harvey-atmospheric-portfolio
- https://github.com/GMyoung/harvey-yang-portfolio
- https://github.com/GMyoung/harvey-yang-cargame-portfolio
- https://gmyoung.github.io/Catalyst-Website/

Three.js revision: ${THREE.REVISION}
License and original attribution are preserved in the repository.
`

export default [
    `%c${text}`,
    'color: #ffffff; font: 400 1em monospace;',
]
