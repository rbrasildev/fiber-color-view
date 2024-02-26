const fiberColorHexa = [
    '#00B050',
    '#FFFF00',
    '#FFFFFF',
    '#00A7E4',
    '#F22300',
    '#692E98',
    '#916130',
    '#F23091',
    '#000000',
    '#797979',
    '#F29101',
    '#01F0F2'
  ]

  const fiberColorHexaWithName = [
    'Verde',
    'Amarelo',
    'Branco',
    'Azul',
    'Vermelho',
    'Violeta',
    'Marrom',
    'Rosa',
    'Preto',
    'Cinza',
    'Laranja',
    'Acqua'
  ]

export default function verifyNameFiber(val) {
    if (val <= 12) {
        return fiberColorHexaWithName[val - 1]
    } else if (val > 12 && val <= 24) {
        return fiberColorHexaWithName[val - 13]
    } else if (val > 24 && val <= 36) {
        return fiberColorHexaWithName[val - 25]
    } else if (val > 36 && val <= 48) {
        return fiberColorHexaWithName[val - 37]
    } else if (val > 48 && val <= 60) {
        return fiberColorHexaWithName[val - 49]
    } else if (val > 60 && val <= 72) {
        return fiberColorHexaWithName[val - 61]
    } else if (val > 72 && val <= 84) {
        return fiberColorHexaWithName[val - 73]
    } else if (val > 84 && val <= 96) {
        return fiberColorHexaWithName[val - 85]
    } else if (val > 96 && val <= 108) {
        return fiberColorHexaWithName[val - 97]
    } else if (val > 108 && val <= 120) {
        return fiberColorHexaWithName[val - 109]
    } else if (val > 120 && val <= 132) {
        return fiberColorHexaWithName[val - 121]
    } else if (val > 132 && val <= 144) {
        return fiberColorHexaWithName[val - 133]
    }
}