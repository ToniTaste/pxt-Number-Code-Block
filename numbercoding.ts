/**
 * Benutzerdefinierte Blöcke
 */
//% color=#4040FF weight=100 icon="\uf02a" block="Zahlencodierung"
namespace Zahlencodierung {
    /**
     * TODO: Zeigt n morsecodiert an
     * @param n Zahl, eg: 5
     */
    //% blockId=device_zeige_Zahl_morsecodiert
    //% block="zeige Zahl %n morsecodiert an"
    //% n.min = -9999 n.max = 9999
    export function zeigeNMorsecodiertAn(n: number): void {
        if (n > -10000 && n < 10000) {
            basic.clearScreen()
            if (n < 0) {
                led.plot(0, 2)
                n = n * -1
            }
            for (let i = 0; i <= 4; i++) {
                let r = n % 10
                n = (n - r) / 10
                let x = 4 - i
                r = 9 - r
                for (let j = 0; j <= 4; j++) {
                    led.plot(x, r - j)
                }
            }
        }
    }
    /**
     * TODO: Zeigt n sorobancodiert an
     * @param n Zahl, eg: 5
     */
    //% blockId=device_zeige_Zahl_sorobancodiert
    //% block="zeige Zahl %n sorobancodiert an"
    //% n.min = -9999 n.max = 9999
    export function zeigeNSorobancodiertAn(n: number): void {
        if (n > -10000 && n < 10000) {
            basic.clearScreen()
            if (n < 0) {
                led.plot(0, 2)
                n = n * -1
            }
            for (let i = 0; i <= 4; i++) {
                let r = n % 10
                n = (n - r) / 10
                let x = 4 - i
                if (r > 4) {
                    led.plot(x, 0)
                    r = r - 5;
                }
                for (let j = 0; j < r; j++) {
                    led.plot(x, 4 - j)
                }
            }
        }
    }
    /**
     * TODO: Zeigt in Spalte x die Zahl n dualcodiert an
     * @param x Spalte auf der LED-Matrix, eg: 0
     * @param n Zahl, eg: 5
     */
    //% blockId=device_zeige_Zahl_dualcodiert_in_Spalte_an
    //% block="zeige Zahl %n in Spalte %x dualcodiert an"
    //% n.min = 0 n.max = 31
    export function zeigeNInSpalteXDualcodiertAn(n: number, x: number): void {
        if (n > 0 && n < 32) {
            for (let i = 4; i >= 0; i--) {
                let r = n % 2
                n = (n - r) / 2
                if (r == 1) {
                    led.plot(x, i)
                } else {
                    led.unplot(x, i)
                }
            }
        }
    }
    /**
     * TODO: Zeigt die Zahl n zweiziffrig an
     * @param n Zahl, eg: 5
     */
    //% blockId=device_zeige_zwei_Zahlen_an
    //% block="zeige Zahl %n zweiziffrig an"
    //% n.min = 0 n.max = 99
    export function zeigeNZweiziffrigAn(n: number): void {
        if (n >= 0 && n < 100) {
            basic.clearScreen()
            let anzeige: number[] = [11111, 11111, 11111, 11111, 11111]
            let wert = n
            let l1: number[] = [99999, 11111, 91999, 91919, 99911, 99919, 99999, 91111, 99599, 99911]
            let l2: number[] = [99999, 99999, 99919, 99999, 11999, 91999, 11999, 99999, 99599, 99999]
            let einer = wert % 10
            let zehner = (wert - einer) / 10
            anzeige[0] = l1[zehner]
            anzeige[1] = l2[zehner]
            anzeige[2] = 11111
            anzeige[3] = l1[einer]
            anzeige[4] = l2[einer]
            for (let spaltennummer = 0; spaltennummer <= 4; spaltennummer++) {
                let spaltenwert = anzeige[spaltennummer]
                for (let zeilennummer = 0; zeilennummer <= 4; zeilennummer++) {
                    let zelle = spaltenwert % 10
                    spaltenwert = (spaltenwert - zelle) / 10
                    if (zelle == 9) {
                        led.plot(spaltennummer, 4 - zeilennummer)
                    } else if (zelle == 5) {
                        led.plotBrightness(spaltennummer, 4 - zeilennummer, 25)
                    }
                }
            }
        }
    }

    /**
    * TODO: Zeigt die Zahl n zweiziffrig mit Komma an
    * @param n Zahl, eg: 5
     */
    //% blockId=device_interpretiere_zwei_Zahlen_mit Komma
    //% block="zeige Zahl %n zweiziffrig mit Komma an"
    //% n.min = 0 n.max = 99
    export function interpretiereNZweiziffrigMitKomma(n: number): void {
        if (n >= 0 && n < 100) {
            basic.clearScreen()
            zeigeNZweiziffrigAn(n)
            led.plot(2, 4)
        }
    }
}
