"""Generate AJ's public, ATS-friendly one-page software engineering resume."""

from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PDF = ROOT / "output" / "pdf" / "atishay-jain-sde-resume.pdf"
PUBLIC_PDF = ROOT / "public" / "resume" / "atishay-jain-sde-resume.pdf"

PAGE_WIDTH, PAGE_HEIGHT = A4
LEFT = 38
RIGHT = PAGE_WIDTH - 38
TOP = PAGE_HEIGHT - 34

INK = HexColor("#17212b")
MUTED = HexColor("#4b5967")
ACCENT = HexColor("#087f73")
RULE = HexColor("#cbd5dc")


def wrap_text(text: str, font: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if not current or stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_link(c: canvas.Canvas, label: str, url: str, x: float, y: float, size: float = 8.8) -> float:
    c.setFont("Helvetica", size)
    c.setFillColor(ACCENT)
    c.drawString(x, y, label)
    width = stringWidth(label, "Helvetica", size)
    c.linkURL(url, (x, y - 2, x + width, y + size + 1), relative=0)
    return x + width


def draw_section(c: canvas.Canvas, title: str, y: float) -> float:
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 9.8)
    c.drawString(LEFT, y, title.upper())
    title_width = stringWidth(title.upper(), "Helvetica-Bold", 9.8)
    c.setStrokeColor(RULE)
    c.setLineWidth(0.6)
    c.line(LEFT + title_width + 8, y + 2.5, RIGHT, y + 2.5)
    return y - 13


def draw_labeled_line(c: canvas.Canvas, label: str, value: str, y: float) -> float:
    size = 8.05
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", size)
    c.drawString(LEFT, y, f"{label}:")
    x = LEFT + stringWidth(f"{label}: ", "Helvetica-Bold", size)
    c.setFont("Helvetica", size)
    c.setFillColor(MUTED)
    c.drawString(x, y, value)
    return y - 11


def draw_project(
    c: canvas.Canvas,
    title: str,
    tech: str,
    bullet: str,
    y: float,
) -> float:
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8.7)
    c.drawString(LEFT, y, title)
    title_width = stringWidth(title, "Helvetica-Bold", 8.7)
    c.setFont("Helvetica-Oblique", 7.8)
    c.setFillColor(MUTED)
    c.drawString(LEFT + title_width + 5, y, f"| {tech}")
    y -= 11.2

    bullet_x = LEFT + 9
    text_x = LEFT + 17
    c.setFillColor(ACCENT)
    c.circle(bullet_x, y + 3, 1.3, stroke=0, fill=1)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.1)
    lines = wrap_text(bullet, "Helvetica", 8.1, RIGHT - text_x)
    for line in lines:
        c.drawString(text_x, y, line)
        y -= 10.3
    return y - 4


def build_resume(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(path), pagesize=A4, pageCompression=1)
    c.setTitle("Atishay Jain - Software Engineering Resume")
    c.setAuthor("Atishay Jain")
    c.setSubject("Software engineering, AI systems, and product engineering resume")

    y = TOP
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 19)
    c.drawCentredString(PAGE_WIDTH / 2, y, "ATISHAY JAIN")
    y -= 17
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 9.3)
    c.drawCentredString(PAGE_WIDTH / 2, y, "SOFTWARE ENGINEERING INTERN | AI SYSTEMS & PRODUCT ENGINEERING")

    y -= 15
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.3)
    contact = "Ludhiana, Punjab, India  |  +91 9646009828  |  ajain8_be23@thapar.edu"
    c.drawCentredString(PAGE_WIDTH / 2, y, contact)

    y -= 14
    labels = [
        ("Portfolio", "https://www.atishay.app"),
        ("GitHub", "https://github.com/Atishay9828/"),
        ("LinkedIn", "https://www.linkedin.com/in/atishay9828/"),
    ]
    gap = 20
    widths = [stringWidth(label, "Helvetica", 8.8) for label, _ in labels]
    x = (PAGE_WIDTH - sum(widths) - gap * (len(labels) - 1)) / 2
    for index, (label, url) in enumerate(labels):
        x = draw_link(c, label, url, x, y)
        if index < len(labels) - 1:
            c.setFillColor(RULE)
            c.setFont("Helvetica", 8.8)
            c.drawString(x + 7, y, "|")
            x += gap

    y -= 18
    y = draw_section(c, "Profile", y)
    profile = (
        "Computer Engineering student building production-oriented software, AI systems, and real product workflows. "
        "Strong in C++, Python, full-stack development, system design, and core computer science fundamentals."
    )
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.7)
    for line in wrap_text(profile, "Helvetica", 8.7, RIGHT - LEFT):
        c.drawString(LEFT, y, line)
        y -= 11
    y -= 4

    y = draw_section(c, "Skills", y)
    skills = [
        ("Languages", "C++, Python, TypeScript, JavaScript, SQL"),
        ("Frontend", "React, Next.js, component-based UI, responsive design, state management"),
        ("Backend / APIs", "FastAPI, Node.js, REST API design, WebSockets, authentication, authorization"),
        ("Data", "PostgreSQL, SQLite, SQLAlchemy, schema design, relational data modeling"),
        ("AI / ML", "PyTorch, ONNX inference, transformer models, local LLM inference, reinforcement learning, LoRA fine-tuning"),
        ("Systems / DevOps", "Docker, Git, GitHub Actions, CI/CD, real-time systems, OCR pipelines"),
        ("Core CS", "Data Structures & Algorithms, OOP, DBMS, Operating Systems, system design"),
    ]
    for label, value in skills:
        y = draw_labeled_line(c, label, value, y)
    y -= 2

    y = draw_section(c, "Education", y)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8.65)
    c.drawString(LEFT, y, "Thapar Institute of Engineering and Technology")
    c.setFont("Helvetica", 8.25)
    c.setFillColor(MUTED)
    c.drawRightString(RIGHT, y, "Aug 2023 - Jun 2027")
    y -= 11
    c.drawString(LEFT, y, "B.E. Computer Engineering")
    c.setFont("Helvetica-Bold", 8.25)
    c.setFillColor(INK)
    c.drawRightString(RIGHT, y, "CGPA: 8.00")
    y -= 12
    c.setFont("Helvetica-Bold", 8.55)
    c.drawString(LEFT, y, "Sacred Heart Senior Secondary School")
    c.setFont("Helvetica", 8.25)
    c.setFillColor(MUTED)
    c.drawRightString(RIGHT, y, "Class XII, Science: 94.2%")
    y -= 17

    y = draw_section(c, "Selected Projects", y)
    projects = [
        (
            "ReceiptSplit - UPI-Native Receipt Splitting Platform",
            "Next.js, FastAPI, PostgreSQL, OCR",
            "Built receipt intake, room joining, collaborative item claiming, exact split calculation, and direct UPI payment coordination; designed modular OCR and deterministic integer-paise settlement flows.",
        ),
        (
            "The Loop - Campus Event Platform",
            "React, FastAPI, WebSockets, Maps",
            "Collaborated on a PWA spanning event discovery, RSVP, chat, friends, carpool, admin workflows, venue navigation, JWT auth, and personalized recommendations.",
        ),
        (
            "Hybrid GenAI Transaction Categorizer",
            "React, FastAPI, ONNX Runtime, SQLite",
            "Built a privacy-first offline classifier with local NLP inference, merchant memory, confidence routing, review overrides, history, and explainable transaction insights.",
        ),
        (
            "Project Mahoraga - Adaptive RL Environment",
            "Python, Gymnasium, PyTorch, LoRA",
            "Designed a stateful boss-fight environment with adaptive resistances, cooldowns, reward shaping, curriculum pressure, and explicit anti-reward-hacking constraints.",
        ),
    ]
    for project in projects:
        y = draw_project(c, *project, y)

    y = draw_section(c, "Experience", y)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8.7)
    c.drawString(LEFT, y, "Finance and Documentation Manager, TEDxTIET")
    c.setFont("Helvetica", 8.1)
    c.setFillColor(MUTED)
    c.drawRightString(RIGHT, y, "Aug 2025 - Feb 2026")
    y -= 10.5
    experience = (
        "Managed an INR 3.5 lakh event budget for a 350-attendee conference and built structured Excel workflows for allocation, approvals, sponsor records, expense tracking, and variance reporting."
    )
    experience_lines = wrap_text(experience, "Helvetica", 8.1, RIGHT - LEFT - 17)
    for line in experience_lines:
        if line == experience_lines[0]:
            c.setFillColor(ACCENT)
            c.circle(LEFT + 9, y + 3, 1.3, stroke=0, fill=1)
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 8.1)
        c.drawString(LEFT + 17, y, line)
        y -= 10.3
    y -= 5

    y = draw_section(c, "Certifications", y)
    certifications = (
        "CI/CD Pipeline with Docker - Coursera (2026)  |  Introduction to Software Engineering - IBM (2026)  |  "
        "Introduction to RAG - Duke University (2026)  |  Fundamentals of Deep Learning - NVIDIA/Whizlabs (2026)"
    )
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.9)
    for line in wrap_text(certifications, "Helvetica", 7.9, RIGHT - LEFT):
        c.drawString(LEFT, y, line)
        y -= 10

    if y < 22:
        raise RuntimeError(f"Resume content overflowed the page (final y={y:.1f}).")

    c.save()


def main() -> None:
    build_resume(OUTPUT_PDF)
    PUBLIC_PDF.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(OUTPUT_PDF, PUBLIC_PDF)
    print(f"Generated {OUTPUT_PDF}")
    print(f"Published {PUBLIC_PDF}")


if __name__ == "__main__":
    main()
