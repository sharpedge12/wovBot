// ==UserScript==
// @name            Λbstract
// @namespace       https://www.wolvesville.com/
// @version         1.5.3
// @description     Plays automatically.
// @author          OnyXed
// @license         MIT
// @match           https://www.wolvesville.com/
// @icon            https://www.google.com/s2/favicons?sz=64&domain=wolvesville.com
// @grant           unsafeWindow
// @updateURL       https://raw.githubusercontent.com/xnyXed/Abstract/main/script.user.js
// @downloadURL     https://raw.githubusercontent.com/xnyXed/Abstract/main/script.user.js
// ==/UserScript==

function _0x500c78(_0x59fd09, { timeout = 0x7530, interval = 0xc8, cancelText = null } = {}) {
  return _0x49d49d(
    () => {
      for (const _0x2ddf4c of document.body.querySelectorAll('*')) {
        if (_0x2ddf4c.textContent.includes(_0x59fd09)) {
          return _0x2ddf4c
        }
      }
    },
    timeout,
    interval,
    cancelText
  )
}
function _0x4f5377(_0x144c10, { timeout = 0x7530, interval = 0xc8, cancelText = null } = {}) {
  const _0x1a013b = new RegExp('\\b' + _0x144c10 + '\\b')
  return _0x49d49d(
    () => {
      for (const _0x8782ec of document.body.querySelectorAll('*')) {
        if (_0x1a013b.test(_0x8782ec.textContent)) {
          return _0x8782ec
        }
      }
    },
    timeout,
    interval,
    cancelText
  )
}
function _0x4a6aa0(_0x37fec3, { timeout = 0x7530, interval = 0xc8, cancelText = null } = {}) {
  return _0x49d49d(
    () => {
      for (const _0x174500 of document.images) {
        if (_0x174500.src.includes(_0x37fec3)) {
          return _0x174500
        }
      }
    },
    timeout,
    interval,
    cancelText
  )
}
function _0x3904a5(_0x3c4772, _0xbc2db9 = 0x2, { timeout = 0x7530, interval = 0xc8, cancelText = null } = {}) {
  return _0x49d49d(
    () => {
      const _0x27c3d6 = []
      for (const _0x577235 of document.images) {
        if (_0x577235.src.includes(_0x3c4772)) {
          _0x27c3d6.push(_0x577235)
        }
        if (_0x27c3d6.length >= _0xbc2db9) {
          return _0x27c3d6
        }
      }
    },
    timeout,
    interval,
    cancelText
  )
}
function _0x49d49d(_0x4a40eb, _0x1f0487, _0xa806f2, _0x29b5bd) {
  return new Promise((_0x94e280) => {
    const _0x1d7863 = Date.now()
    const _0x3c5585 = () => {
      const _0x23b263 = _0x4a40eb()
      if (_0x23b263) {
        return _0x94e280(_0x23b263)
      }
      if (_0x29b5bd && document.body.innerText.includes(_0x29b5bd)) {
        return _0x94e280(null)
      }
      if (Date.now() - _0x1d7863 >= _0x1f0487) {
        return _0x94e280(null)
      }
      setTimeout(_0x3c5585, _0xa806f2)
    }
    _0x3c5585()
  })
}
function _0x47e12a(_0x49f955) {
  return new Promise((_0x533131) => setTimeout(_0x533131, _0x49f955))
}
function _0x1e7fe4(_0x423e4f) {
  const _0x3c4377 = Array.from(document.querySelectorAll('[tabindex="0"]')).find(
    (_0x19302f) =>
      Array.from(_0x19302f.querySelectorAll('img')).some((_0x165ff7) => _0x423e4f.test(_0x165ff7.src)) &&
      !_0x19302f.disabled
  )
  if (_0x3c4377) {
    _0x3c4377.click()
  }
}
function _0x1cdbad(_0x2e4f13, _0x561460) {
  const _0x4e5e1c = Array.from(_0x2e4f13.querySelectorAll('img')).find((_0x148e86) => _0x561460.test(_0x148e86.src))
  if (_0x4e5e1c) {
    const _0x35ad67 = _0x4e5e1c.closest('[tabindex="0"]')
    if (_0x35ad67 && !_0x35ad67.disabled) {
      _0x35ad67.click()
    }
  }
}
function _0x4155b3(_0x10c980) {
  const _0x1eccc5 = Array.from(document.querySelectorAll('[tabindex="0"]')).find(
    (_0x19411c) => _0x19411c.textContent.includes(_0x10c980) && !_0x19411c.disabled
  )
  if (_0x1eccc5) {
    _0x1eccc5.click()
  }
}
function _0xd22eaa(_0x655db9) {
  const _0x35895e = Array.from(document.querySelectorAll('[tabindex="0"]')).filter(
    (_0x1d78d5) =>
      Array.from(_0x1d78d5.querySelectorAll('img')).some((_0x1b84f5) => _0x1b84f5.src.includes(_0x655db9)) &&
      !_0x1d78d5.disabled
  )
  if (_0x35895e.length === 0x0) {
    return
  }
  let _0x250798 = _0x35895e[0x0]
  let _0x336470 = 0x0
  for (const _0x1e1f85 of _0x35895e) {
    let _0x388152 = 0x0
    let _0x54ec00 = _0x1e1f85.parentElement
    while (_0x54ec00) {
      _0x388152++
      _0x54ec00 = _0x54ec00.parentElement
    }
    if (_0x388152 > _0x336470) {
      _0x336470 = _0x388152
      _0x250798 = _0x1e1f85
    }
  }
  _0x250798.click()
}
function _0x3db0f9(_0x49ff2c) {
  const _0x1f4cc0 = Array.from(document.querySelectorAll('[tabindex="0"]')).filter(
    (_0x3d9ebf) => _0x3d9ebf.textContent.includes(_0x49ff2c) && !_0x3d9ebf.disabled
  )
  if (_0x1f4cc0.length === 0x0) {
    return
  }
  let _0x360644 = _0x1f4cc0[0x0]
  let _0xd027b = 0x0
  _0x1f4cc0.forEach((_0x4c099e) => {
    let _0x38f77e = 0x0
    let _0x269b94 = _0x4c099e.parentElement
    while (_0x269b94) {
      _0x38f77e++
      _0x269b94 = _0x269b94.parentElement
    }
    if (_0x38f77e > _0xd027b) {
      _0xd027b = _0x38f77e
      _0x360644 = _0x4c099e
    }
  })
  _0x360644.click()
}
function _0x44d07d(_0x46d718) {
  const _0x577286 = Array.from(_0x46d718.querySelectorAll('[tabindex="0"]')).filter((_0x2838c6) => !_0x2838c6.disabled)
  if (_0x577286.length === 0x0) {
    return
  }
  let _0x5e779c = _0x577286[0x0]
  let _0x29534a = Infinity
  _0x577286.forEach((_0x27f4dd) => {
    let _0x4ad5c1 = 0x0
    let _0x303e9c = _0x27f4dd.parentElement
    while (_0x303e9c && _0x303e9c !== _0x46d718) {
      _0x4ad5c1++
      _0x303e9c = _0x303e9c.parentElement
    }
    if (_0x4ad5c1 < _0x29534a) {
      _0x29534a = _0x4ad5c1
      _0x5e779c = _0x27f4dd
    }
  })
  _0x5e779c.click()
}
function _0x3d3103(_0xecb8b2) {
  return Array.from(document.querySelectorAll('img')).some((_0x2b385c) => _0x2b385c.src.includes(_0xecb8b2))
}
function _0x12b6fa(_0x5db3fd, _0x543d22) {
  return Array.from(_0x5db3fd.querySelectorAll('img')).some((_0x559d03) => _0x543d22.test(_0x559d03.src))
}
function _0x3baa47(_0x3901de) {
  return document.body.textContent.includes(_0x3901de)
}
function _0x40d51f() {
  let _0x4bad75 = []
  let _0x1fc747 = Infinity
  document.querySelectorAll('span').forEach((_0x4af15e) => {
    if (_0x4af15e.textContent.includes(':')) {
      let _0x244b3f = _0x4af15e.closest('div')
      if (_0x244b3f) {
        let _0x699c6b = _0x244b3f.getBoundingClientRect().width * _0x244b3f.getBoundingClientRect().height
        if (_0x699c6b < _0x1fc747) {
          _0x1fc747 = _0x699c6b
          _0x4bad75 = [
            {
              div: _0x244b3f,
              spanText: _0x4af15e.textContent,
            },
          ]
        } else if (_0x699c6b === _0x1fc747) {
          _0x4bad75.push({
            div: _0x244b3f,
            spanText: _0x4af15e.textContent,
          })
        }
      }
    }
  })
  return _0x4bad75.length > 0x0
    ? _0x4bad75.map(({ div: _0x2335f7, spanText: _0x28732c }) => _0x2335f7.textContent.replace(_0x28732c, '').trim())
    : null
}
function _0x280b5e(_0x5f30a9) {
  if (!_0x5f30a9) {
    return 'Unknown'
  }
  let _0x3a51ca = 'Other'
  const _0x2d6965 = {
    juniorwerewolf: 'Junior Werewolf',
    junior_werewolf: 'Junior Werewolf',
    split_wolf: 'Split Wolf',
    splitwolf: 'Split Wolf',
    wolf: 'Wolf',
    priest: 'Priest',
    vigilante: 'Shooter',
    gunner: 'Shooter',
  }
  for (const _0x60b94f of Object.keys(_0x2d6965)) {
    if (_0x5f30a9.includes(_0x60b94f)) {
      _0x3a51ca = _0x2d6965[_0x60b94f]
      break
    }
  }
  return _0x3a51ca
}
async function _0x537c74(_0x175771, _0x625906, _0x2d6478, _0x520220 = 0x2) {
  if (_0x520220 > 0x4) {
    return
  }
  const _0x5c6862 = await _0x3904a5('vote_day_selected', _0x520220, {
    timeout: 0x15f90,
    cancelText: 'Continue',
  })
  if (
    document.body.textContent.includes('Continue') ||
    document.body.textContent.includes('Play again') ||
    document.body.textContent.includes('Victory') ||
    document.body.textContent.includes('Defeat') ||
    document.body.textContent.includes('Draw')
  ) {
    return
  }
  if (!_0x5c6862) {
    return
  }
  _0x1e7fe4(/.*gunner_bullet.*\.png/)
  await _0x47e12a(0xc8)
  const _0x1127dc = _0x2d6478.find(
    (_0x298f87) =>
      _0x12b6fa(_0x298f87, new RegExp('.*vote_day_selected.*\\.png')) &&
      !_0x625906.includes(_0x298f87) &&
      !_0x298f87.textContent.includes(_0x175771.name)
  )
  if (_0x1127dc) {
    _0x1cdbad(_0x1127dc, /.*gunner_voting_shoot.*\.png/)
    return
  }
  await _0x47e12a(0x1f4)
  await _0x537c74(_0x175771, _0x625906, _0x2d6478, _0x520220 + 0x1)
}
async function _0xfb23ad(_0x7886cc, _0x3d2590, _0x10bff8, _0x23c9bd) {
  if (
    document.body.textContent.includes('Continue') ||
    document.body.textContent.includes('Play again') ||
    document.body.textContent.includes('Victory') ||
    document.body.textContent.includes('Defeat') ||
    document.body.textContent.includes('Draw')
  ) {
    return
  }
  if (!_0x39921a.has(_0x7886cc.coupleRole1) && !_0x39921a.has(_0x7886cc.coupleRole2)) {
    if (_0x39921a.has(_0x7886cc.role)) {
      let _0x22bbc0 = _0x40d51f()?.['flatMap']((_0x451437) => _0x451437.match(/\b\d{1,2}\b/g) || [])
      if (_0x22bbc0?.['some']((_0x2ecc73) => _0x2ecc73 == _0x7886cc.number)) {
        return
      }
      if (
        document.body.textContent.includes('Continue') ||
        document.body.textContent.includes('Play again') ||
        document.body.textContent.includes('Victory') ||
        document.body.textContent.includes('Defeat') ||
        document.body.textContent.includes('Draw')
      ) {
        return
      }
      let _0x38e726 = document.querySelector('textarea')
      Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set.call(
        _0x38e726,
        _0x7886cc.number
      )
      _0x38e726.dispatchEvent(
        new Event('input', {
          bubbles: true,
        })
      )
      _0x38e726.dispatchEvent(
        new Event('change', {
          bubbles: true,
        })
      )
      _0x1e7fe4(/.*icon_send.*\.png/)
      _0x47e12a(0x3e8)
    } else {
      const _0x376ff8 = {
        Priest: {
          triggerRegex: /.*priest_holy_water.*\.png/,
          actionRegex: /.*priest_holy_water.*\.png/,
        },
        Shooter: {
          triggerRegex: /.*gunner_bullet.*\.png/,
          actionRegex: /.*gunner_voting_shoot.*\.png/,
        },
      }
      const _0x39be90 = _0x376ff8[_0x7886cc.role]
      if (!_0x39be90) {
        return
      }
      await _0x4a6aa0('vote_day_selected', {
        timeout: 0x15f90,
        cancelText: 'Continue',
      })
      if (
        document.body.textContent.includes('Continue') ||
        document.body.textContent.includes('Play again') ||
        document.body.textContent.includes('Victory') ||
        document.body.textContent.includes('Defeat') ||
        document.body.textContent.includes('Draw')
      ) {
        return
      }
      _0x1e7fe4(_0x39be90.triggerRegex)
      await _0x47e12a(0xc8)
      const _0x4b547d = _0x23c9bd.find((_0x2cf76e) => _0x12b6fa(_0x2cf76e, /.*vote_day_selected.*\.png/))
      if (_0x4b547d) {
        _0x1cdbad(_0x4b547d, _0x39be90.actionRegex)
      }
    }
  } else {
    if (!_0x10bff8.some((_0x7c0179) => _0x7c0179.some((_0xe54773) => _0xe54773.includes('hand-skin')))) {
      _0x44d07d(_0x39921a.has(_0x7886cc.coupleRole1) ? _0x3d2590[0x0] : _0x3d2590[0x1])
    }
    if (_0x7886cc.role === 'Priest') {
      _0x1e7fe4(/.*priest_holy_water.*\.png/)
      setTimeout(() => {
        const _0x5e4e53 = _0x23c9bd.find((_0x13f13c) => _0x12b6fa(_0x13f13c, /.*priest_holy_water.*\.png/))
        if (_0x5e4e53) {
          _0x1cdbad(_0x5e4e53, /.*priest_holy_water.*\.png/)
        }
      }, 0xc8)
    } else {
      if (_0x7886cc.role === 'Shooter') {
        await _0x537c74(_0x7886cc, _0x3d2590, _0x23c9bd)
      }
    }
  }
}
async function _0x4e2259(_0x184f3e, _0x399e09, _0x308ade) {
  if (
    document.body.textContent.includes('Continue') ||
    document.body.textContent.includes('Play again') ||
    document.body.textContent.includes('Victory') ||
    document.body.textContent.includes('Defeat') ||
    document.body.textContent.includes('Draw')
  ) {
    return
  }
  const _0x22bc55 = (_0x35a854, _0x583127) => {
    if (
      document.body.textContent.includes('Continue') ||
      document.body.textContent.includes('Play again') ||
      document.body.textContent.includes('Victory') ||
      document.body.textContent.includes('Defeat') ||
      document.body.textContent.includes('Draw')
    ) {
      return
    }
    const _0x403ebb = document.querySelector('textarea')
    Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set.call(_0x403ebb, _0x35a854)
    _0x403ebb.dispatchEvent(
      new Event('input', {
        bubbles: true,
      })
    )
    _0x403ebb.dispatchEvent(
      new Event('change', {
        bubbles: true,
      })
    )
    _0x1e7fe4(/.*icon_send.*\.png/)
    if (
      _0x583127 &&
      ((_0x184f3e.coupleRole1 !== 'Priest' && _0x184f3e.coupleRole2 !== 'Priest') ||
        _0x184f3e.role === 'Junior Werewolf')
    ) {
      _0x44d07d(_0x583127)
    }
  }
  const _0x2dcbf1 = async (_0xc1a2b0) => {
    if (
      (_0x39921a.has(_0x184f3e.coupleRole1) && _0x39921a.has(_0x184f3e.coupleRole2)) ||
      (_0x39921a.has(_0x184f3e.coupleRole1) && _0x184f3e.coupleRole2 === null)
    ) {
      return
    }
    if (
      document.body.textContent.includes('Continue') ||
      document.body.textContent.includes('Play again') ||
      document.body.textContent.includes('Victory') ||
      document.body.textContent.includes('Defeat') ||
      document.body.textContent.includes('Draw')
    ) {
      return
    }
    await _0x500c78('25s', {
      cancelText: 'Continue',
    })
    _0x22bc55('Who? Mine ' + _0x184f3e.coupleNumber1, _0x399e09[0x0])
    await _0x4f5377('5s', {
      cancelText: 'Continue',
    })
    if (
      document.body.textContent.includes('Continue') ||
      document.body.textContent.includes('Play again') ||
      document.body.textContent.includes('Victory') ||
      document.body.textContent.includes('Defeat') ||
      document.body.textContent.includes('Draw')
    ) {
      return
    }
    _0x1e7fe4(_0xc1a2b0)
    setTimeout(() => {
      const _0x5d954d = _0x40d51f()
      const _0xed9d35 = _0x5d954d?.['flatMap']((_0x486cf4) =>
        (_0x486cf4.match(/\b\d{1,2}\b/g) || []).filter(
          (_0x1f8dca) => ![_0x184f3e.number, _0x184f3e.coupleNumber1, _0x184f3e.coupleNumber2].includes(_0x1f8dca)
        )
      )[0x0]
      if (!_0xed9d35) {
        return
      }
      const _0x1519d8 = _0x308ade[parseInt(_0xed9d35, 0xa) - 0x1]
      const _0x599c83 = [..._0x1519d8.querySelectorAll('img')].find((_0x3d2ff9) => _0xc1a2b0.test(_0x3d2ff9.src))
      _0x599c83?.['closest']('[tabindex="0"]:not([disabled])')?.['click']()
    }, 0xc8)
    await _0x500c78('Voting', {
      cancelText: 'Continue',
    })
  }
  if (_0x184f3e.role === 'Wolf') {
    await _0x500c78('25s', {
      cancelText: 'Continue',
    })
    const _0x58fd94 = _0x184f3e.coupleRole1
    const _0x5cccb9 = _0x184f3e.coupleRole2
    if ((_0x39921a.has(_0x58fd94) && _0x39921a.has(_0x5cccb9)) || (_0x39921a.has(_0x58fd94) && _0x5cccb9 === null)) {
      return
    }
    const _0x5e9110 = _0x58fd94 === 'Priest' || _0x5cccb9 === 'Priest'
    _0x22bc55(_0x5e9110 ? _0x184f3e.coupleNumber1 + ' priest' : _0x184f3e.coupleNumber1, _0x399e09[0x0])
    await _0x4f5377('5s', {
      cancelText: 'Continue',
    })
    const _0x5ce2e5 = _0x399e09[0x0]
    let _0x1285cc = 0x0
    for (let _0x3e99b9 = _0x308ade.length; _0x1285cc < _0x3e99b9; _0x1285cc++) {
      const _0x500739 = _0x308ade[_0x1285cc]
      const _0x408792 = _0x500739.querySelectorAll('img')
      let _0x5b24cd
      let _0x34b7e4 = ''
      for (let _0x1c52ca = _0x408792.length - 0x1; _0x1c52ca >= 0x0; _0x1c52ca--) {
        _0x5b24cd = _0x408792[_0x1c52ca].src
        if (
          _0x5b24cd.indexOf('vote_day') !== -0x1 ||
          _0x5b24cd.indexOf('vote_werewolves') !== -0x1 ||
          _0x5b24cd.indexOf('hand-skin') !== -0x1
        ) {
          continue
        }
        _0x34b7e4 = _0x5b24cd.slice(_0x5b24cd.lastIndexOf('/') + 0x1)
        break
      }
      if (!_0x34b7e4 || _0x280b5e(_0x34b7e4) !== 'Junior Werewolf') {
        continue
      }
      for (let _0x4c10b7 = 0x0; _0x4c10b7 < _0x408792.length; _0x4c10b7++) {
        if (_0x408792[_0x4c10b7].src.indexOf('vote_werewolves_voter') !== -0x1) {
          if (!_0x5e9110) {
            _0x44d07d(_0x5ce2e5)
          }
          break
        }
      }
    }
    await _0x500c78('Voting', {
      cancelText: 'Continue',
    })
  } else {
    if (_0x184f3e.role === 'Junior Werewolf') {
      await _0x2dcbf1(/.*junior_werewolf_selection_marker.*\.png/)
    } else {
      if (_0x184f3e.role === 'Split Wolf') {
        await _0x2dcbf1(/.*splitwolf_bind.*\.png/)
      }
    }
  }
}
async function _0x199d8d(_0x60cb5a) {
  const _0x5607bc = Array.from(document.querySelectorAll('[style*="flex-direction: column"]')).filter((_0x2cced8) => {
    const _0x11e5b7 = _0x2cced8.textContent.trim()
    return /^\d+\s/.test(_0x11e5b7)
  })
  const _0x3e7fbe = _0x5607bc.filter((_0x191cfa) => {
    const _0xe369a7 = Array.from(_0x191cfa.querySelectorAll('img'))
    return _0xe369a7.some((_0x123cfa) => _0x123cfa.src.includes('cupid_select_lovers_sticker_small'))
  })
  const _0x2280a7 = _0x3e7fbe.filter((_0x4aa518) => !_0x4aa518.textContent.includes(_0x60cb5a))
  while (_0x2280a7.length < 0x2) {
    _0x2280a7.push(null)
  }
  const _0x460f66 = _0x3e7fbe
    .filter((_0x48ddc9) => !_0x48ddc9.textContent.includes(_0x60cb5a))
    .map((_0x64ff01) => {
      return Array.from(_0x64ff01.querySelectorAll('img')).map((_0x3de59f) => {
        const _0x54ab6c = _0x3de59f.src.split('/')
        return _0x54ab6c[_0x54ab6c.length - 0x1]
      })
    })
  const _0x44aa14 = _0x3e7fbe
    .filter((_0x2f057e) => _0x2f057e.textContent.includes(_0x60cb5a))
    .map((_0xd04f3d) => {
      return Array.from(_0xd04f3d.querySelectorAll('img')).map((_0x47637f) => {
        const _0x3b7cc3 = _0x47637f.src.split('/')
        return _0x3b7cc3[_0x3b7cc3.length - 0x1]
      })
    })
  const _0x388c83 = _0x44aa14.map((_0x7d39b8) => {
    var _0x45dc81 = _0x7d39b8.length - 0x1
    while (
      _0x7d39b8[_0x45dc81].includes('vote_day') ||
      _0x7d39b8[_0x45dc81].includes('vote_werewolves') ||
      _0x7d39b8[_0x45dc81].includes('hand-skin')
    ) {
      _0x45dc81 -= 0x1
    }
    return _0x7d39b8[_0x45dc81]
  })
  const _0x217d6f = _0x460f66.map((_0x13336a) => {
    var _0x59829a = _0x13336a.length - 0x1
    while (
      _0x13336a[_0x59829a].includes('vote_day') ||
      _0x13336a[_0x59829a].includes('vote_werewolves') ||
      _0x13336a[_0x59829a].includes('hand-skin')
    ) {
      _0x59829a -= 0x1
    }
    return _0x13336a[_0x59829a]
  })
  const _0x253897 = _0x5607bc.find((_0x41ac08) => _0x41ac08.textContent.includes(_0x60cb5a))
  const _0x2124f1 = {
    name: _0x60cb5a,
    number: _0x253897.textContent.match(/\d+/) ? _0x253897.textContent.match(/\d+/)[0x0] : null,
    role: _0x280b5e(_0x388c83[0x0]),
    coupleNumber1: _0x2280a7[0x0]
      ? _0x2280a7[0x0].textContent.match(/\d+/)
        ? _0x2280a7[0x0].textContent.match(/\d+/)[0x0]
        : null
      : null,
    coupleRole1: _0x217d6f[0x0] ? _0x280b5e(_0x217d6f[0x0]) : null,
    coupleNumber2: _0x2280a7[0x1]
      ? _0x2280a7[0x1].textContent.match(/\d+/)
        ? _0x2280a7[0x1].textContent.match(/\d+/)[0x0]
        : null
      : null,
    coupleRole2: _0x217d6f[0x1] ? _0x280b5e(_0x217d6f[0x1]) : null,
  }
  console.group('Λbstract Debug')
  console.log('AllPlayers count:', _0x5607bc.length)
  console.log('Player info:', _0x2124f1)
  _0x5607bc.forEach((_0x7e1a6b, _0x5a37b8) => {
    console.log('Player ' + (_0x5a37b8 + 0x1) + ':', _0x7e1a6b.textContent)
  })
  console.groupEnd()
  if (_0x3de60c() === 'Discussion' || _0x3de60c() === 'Voting') {
    await _0xfb23ad(_0x2124f1, _0x2280a7, _0x44aa14, _0x5607bc)
  } else {
    if (_0x3de60c() === '') {
      await _0x4e2259(_0x2124f1, _0x2280a7, _0x5607bc)
    }
  }
}
async function _0x27b5cc() {
  _0x3db0f9('Continue')
  await _0x500c78('Play again', {
    cancelText: 'INVENTORY',
  })
  _0x4155b3('Play again')
  _0x4155b3('OK')
}
function _0x3de60c() {
  const _0x3dedce = document.querySelectorAll('div')
  for (let _0x3b7f0a = 0x0; _0x3b7f0a < _0x3dedce.length; _0x3b7f0a++) {
    const _0x50503e = _0x3dedce[_0x3b7f0a].textContent
    const _0x23c539 = _0x50503e && _0x50503e.match(/^([\S\s]*?)\s*\d{1,2}s$/)
    if (_0x23c539) {
      return _0x23c539[0x1].trim()
    }
  }
  return null
}
function _0x1db34a() {
  return _0x3de60c() === 'Discussion' || _0x3de60c() === 'Voting'
}
function _0x45d48f() {
  return _0x3de60c() === ''
}
function _0x37da36() {
  return (
    document.body.textContent.includes('Continue') ||
    document.body.textContent.includes('Play again') ||
    document.body.textContent.includes('Victory') ||
    document.body.textContent.includes('Defeat') ||
    document.body.textContent.includes('Draw')
  )
}
async function _0x48b629(_0x1c5c0c) {
  let _0xc49aef = document.body.textContent
  if (_0xc49aef.includes('MORE PLAYERS REQUIRED') || _0xc49aef.includes('START GAME')) {
    return _0x4155b3('START GAME')
  }
  if (_0xc49aef.includes('SELECT A ROLE') || _0xc49aef.includes('Team: You belong to')) {
    if (_0x3d3103('instigator')) {
      return _0xd22eaa('cupid')
    }
  }
  if (_0xc49aef.includes('Continue')) {
    return await _0x27b5cc()
  }
  if (
    (_0xc49aef.includes('Welcome to the werewolves chat.') || _0xc49aef.includes('Voting')) &&
    !(
      document.body.textContent.includes('Continue') ||
      document.body.textContent.includes('Play again') ||
      document.body.textContent.includes('Victory') ||
      document.body.textContent.includes('Defeat') ||
      document.body.textContent.includes('Draw')
    )
  ) {
    await _0x199d8d(_0x1c5c0c)
  }
}
;(function () {
  'use strict'

  try {
    const _0xcfc595 = new Map()
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (_0x2bb3aa) => _0xcfc595.get(_0x2bb3aa) || null,
        setItem: (_0x55a09c, _0x50520c) => _0xcfc595.set(_0x55a09c, String(_0x50520c)),
        removeItem: (_0x204040) => _0xcfc595['delete'](_0x204040),
        clear: () => _0xcfc595.clear(),
        key: (_0x49d278) => Array.from(_0xcfc595.keys())[_0x49d278] || null,
        get length() {
          return _0xcfc595.size
        },
      },
      writable: false,
      configurable: false,
    })
  } catch (_0x10647b) {}
  if (typeof unsafeWindow !== 'undefined') {
    try {
      unsafeWindow.BroadcastChannel = function () {
        return {
          postMessage: () => {},
          onmessage: null,
          close: () => {},
        }
      }
    } catch (_0x7b0a58) {}
  }
  window.addEventListener('storage', (_0xb47c11) => _0xb47c11.stopImmediatePropagation(), true)
})()
const _0x39921a = new Set(['Wolf', 'Junior Werewolf', 'Split Wolf'])
let _0x33212f = prompt('Enter your name:').trim()
;(async () => {
  try {
    // const _0x53eb1f = await fetch('https://abstract-project.onrender.com/api/verify-name', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: _0x33212f,
    //   }),
    // })
    const _0x361669 = {
      allowed: true,
      name: 'Master Chief',
      expireAt: '2100-07-15T06:30:00.000Z',
    }
    console.log(_0x361669)
    if (!_0x361669.allowed) {
      alert('Your name is not allowed. Please contact @onyxed.')
      return
    }
    const _0x59dcc2 = new Date()
    const _0x4eca73 = new Date(_0x361669.expireAt)
    if (_0x4eca73 <= _0x59dcc2) {
      alert('Your license has expired. Please contact @onyxed.')
      return
    }
    const _0x5de6b7 = _0x4eca73 - _0x59dcc2
    let _0xd0e3a6
    if (_0x5de6b7 > 315360000000) {
      _0xd0e3a6 = 'never expires'
    } else {
      const _0x1a62d8 = Math.floor(_0x5de6b7 / 86400000)
      const _0x1b35ac = Math.floor((_0x5de6b7 % 86400000) / 3600000)
      if (_0x1a62d8 >= 0x7) {
        _0xd0e3a6 = _0x1a62d8 + ' day' + (_0x1a62d8 !== 0x1 ? 's' : '')
      } else {
        _0xd0e3a6 =
          _0x1a62d8 +
          ' day' +
          (_0x1a62d8 !== 0x1 ? 's' : '') +
          ' and ' +
          _0x1b35ac +
          ' hour' +
          (_0x1b35ac !== 0x1 ? 's' : '')
      }
    }
    alert('Λbstract is running.\nExpires in: ' + _0xd0e3a6)
    ;(async function _0x3714e3() {
      try {
        await _0x48b629(_0x33212f)
      } catch (_0x7891a2) {
      } finally {
        await _0x47e12a(0x3e8)
        _0x3714e3()
      }
    })()
  } catch (_0x21773b) {}
})()
