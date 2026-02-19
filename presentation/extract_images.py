import fitz
import os

docs_dir = r"C:\Users\cd476\workspace\thesis\docs"
output_dir = r"C:\Users\cd476\workspace\thesis\presentation\images"
os.makedirs(output_dir, exist_ok=True)

pdfs = [
    ("1.계층2 블록체인 기반 중앙은행 디지털 화폐 시스템 설계 및 구현1.pdf", "cbdc"),
    ("2.옵티미스틱 롤업을 활용한 블록체인 기반 분산 클라우드 스토리지 시스템의 성능 개선에 관한 연구_camera ready.pdf", "storage"),
    ("3.ZK State Channel 기반 하이브리드 롤업 분쟁 프로토콜 오프체인 이등분과 온디맨드 유효성 증명.pdf", "zk")
]

for pdf_file, prefix in pdfs:
    pdf_path = os.path.join(docs_dir, pdf_file)
    print(f"\n=== Processing: {prefix} ===")

    doc = fitz.open(pdf_path)
    img_count = 0

    for page_num in range(len(doc)):
        page = doc[page_num]
        images = page.get_images()

        for img_idx, img in enumerate(images):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]

            # Skip small images (likely icons or artifacts)
            if len(image_bytes) < 5000:
                continue

            img_count += 1
            img_filename = f"{prefix}_p{page_num+1}_img{img_idx+1}.{image_ext}"
            img_path = os.path.join(output_dir, img_filename)

            with open(img_path, "wb") as f:
                f.write(image_bytes)

            print(f"  Extracted: {img_filename} ({len(image_bytes)} bytes)")

    doc.close()
    print(f"  Total images from {prefix}: {img_count}")

print(f"\n=== All images saved to: {output_dir} ===")
