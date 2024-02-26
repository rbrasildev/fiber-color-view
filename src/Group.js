export default function verifyColorNameGroup(val) {
  if (val <= 12) {
    return ['Verde', '#00B050']
  } else if (val > 12 && val <= 24) {
    return ['Amarelo', '#FFFF00']
  }
  else if (val > 24 && val <= 36) {
    return ['Branco', '#FFFF']
  }
  else if (val > 36 && val <= 48) {
    return ['Azul', '#00A7E4']
  }
  else if (val > 48 && val <= 60) {
    return ['Vermelho', '#F22300']
  }
  else if (val > 60 && val <= 72) {
    return ['Lilas', '#692E98']
  }
  else if (val > 72 && val <= 84) {
    return ['Marrom', '#916130']
  }
  else if (val > 84 && val <= 96) {
    return ['Rosa', '#F23091']
  }
  else if (val > 96 && val <= 108) {
    return ['Preto', '#000000']
  }
  else if (val > 108 && val <= 120) {
    return ['Cinza', '#797979']
  }
  else if (val > 120 && val <= 132) {
    return ['Laranja', '#F29101']
  }
  else if (val > 132 && val <= 144) {
    return ['Acqua', '#01F0F2']
  } else {
    return false;
  }
}