# Baut index.html: Schriften, Stil, Inhalte und Logik in einer Datei – läuft per file:// und ohne Netz.
# Aufruf: python3 build.py
import base64, pathlib
root = pathlib.Path(__file__).parent
src = root / "src"
def b64(name):
    return base64.b64encode((root / "fonts" / name).read_bytes()).decode()
def face(family, weight, style, datei):
    return (f'@font-face{{font-family:"{family}";font-weight:{weight};font-style:{style};font-display:swap;'
            f'src:url(data:font/woff;base64,{b64(datei)}) format("woff")}}')
fonts = "\n".join([
    face("Lora", "400 700", "normal", "lora.woff"),
    face("Lora", "400 700", "italic", "lora-i.woff"),
    face("Inter", "400", "normal", "inter-Regular.woff"),
    face("Inter", "600", "normal", "inter-SemiBold.woff"),
])
lies = lambda n: (src / n).read_text(encoding="utf-8")
html = lies("seite.html")
teile = {
    "/*FONTS*/": fonts,
    "/*SEITE*/": lies("seite.css"),
    "/*DATEN*/": lies("daten-jahr.js"),
    "/*KERN*/": lies("kern.js"),
    "/*BLAETTER*/": "\n".join(lies(n) for n in ["blatt-e1.js", "blatt-e3.js", "blatt-bausteine.js", "blatt-e2.js", "blatt-e4.js", "blatt-e5.js", "blatt-e6.js", "blatt-e7.js", "blatt-e8.js"]),
    "/*HUB*/": lies("hub.js"),
    "/*START*/": lies("start.js"),
}
for marke, inhalt in teile.items():
    assert html.count(marke) == 1, marke
    html = html.replace(marke, inhalt)
(root / "index.html").write_text(html, encoding="utf-8")
print("index.html", len(html) // 1024, "KB")
