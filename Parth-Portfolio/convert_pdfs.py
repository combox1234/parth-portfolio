import os
import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    import fitz
except ImportError:
    print("PyMuPDF not found, installing...")
    install('pymupdf')
    import fitz

folder = r"f:\New folder\Parth-Portfolio\public\certificates\parth certificate"

for filename in os.listdir(folder):
    if filename.lower().endswith('.pdf'):
        pdf_path = os.path.join(folder, filename)
        print(f"Converting {filename}...")
        doc = fitz.open(pdf_path)
        page = doc.load_page(0) # first page
        pix = page.get_pixmap(dpi=150)
        png_filename = filename[:-4] + ".png"
        png_path = os.path.join(folder, png_filename)
        pix.save(png_path)
        print(f"Saved {png_filename}")

print("Done.")
