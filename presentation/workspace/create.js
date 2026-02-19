'use strict';
const pptxgen = require('pptxgenjs');
const html2pptx = require('C:/Users/cd476/.claude/skills/pptx/scripts/html2pptx.js');
const fs = require('fs');
const path = require('path');
const os = require('os');

const OUT = 'C:/Users/cd476/workspace/thesis/presentation/dissertation-defense-v4.pptx';
const TMP = path.join(os.tmpdir(), 'diss_v4');
if (!fs.existsSync(TMP)) fs.mkdirSync(TMP, { recursive: true });

// Color palette
const C = {
  navy:    '#1B3A6B',
  blue:    '#2E6DB4',
  accent:  '#4472C4',
  sky:     '#7AAAD8',
  lbblue:  '#D6E4F7',
  bg:      '#F0F5FC',
  white:   '#FFFFFF',
  dark:    '#1A1A2E',
  gray:    '#555555',
  lgray:   '#F5F7FA',
  green:   '#27AE60',
  red:     '#C0392B',
  orange:  '#E07A5F',
};

function bodyStyle(bg) {
  bg = bg || C.white;
  return `html{background:${bg}}body{width:720pt;height:405pt;margin:0;padding:0;display:flex;font-family:Arial,sans-serif;background:${bg}}*{box-sizing:border-box}`;
}

// ──────────────────────────────────────────────
// SLIDE 1: Cover
// ──────────────────────────────────────────────
function s01() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
${bodyStyle(C.navy)}
body{flex-direction:column;align-items:stretch}
.top{height:6pt;background:${C.accent};flex-shrink:0}
.bot{height:6pt;background:${C.accent};flex-shrink:0}
.main{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 50pt}
h1{color:${C.white};font-size:22pt;font-weight:bold;text-align:center;margin:0 0 6pt 0;line-height:1.45}
.eng{color:${C.sky};font-size:12pt;text-align:center;margin:0 0 20pt 0;line-height:1.5}
.divider{width:200pt;height:2pt;background:${C.accent};margin:0 0 16pt 0}
.author{color:${C.white};font-size:15pt;font-weight:bold;text-align:center;margin:0 0 6pt 0}
.info{color:#B8CCE8;font-size:11pt;text-align:center;margin:2pt 0}
</style></head><body>
<div class="top"></div>
<div class="main">
  <h1>옵티미스틱 롤업의 확장성 향상을 위한<br>하이브리드 프로토콜 설계 및 응용에 관한 연구</h1>
  <p class="eng">A Study on the Design and Application of a Hybrid Protocol<br>for Improving Scalability in Optimistic Rollup</p>
  <div class="divider"></div>
  <p class="author">황재승</p>
  <p class="info">지도교수: 김영한 교수님</p>
  <p class="info">숭실대학교 대학원 AI IT융합학과</p>
  <p class="info">2026년 2월</p>
</div>
<div class="bot"></div>
</body></html>`;
}

// ──────────────────────────────────────────────
// SLIDE 2: Table of Contents
// ──────────────────────────────────────────────
function s02() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
${bodyStyle(C.white)}
.left{width:200pt;background:${C.navy};display:flex;flex-direction:column;align-items:center;justify-content:center}
.toc-title{color:${C.white};font-size:30pt;font-weight:bold;text-align:center;margin:0}
.toc-sub{color:${C.sky};font-size:13pt;text-align:center;margin:6pt 0 0 0}
.right{flex:1;padding:24pt 28pt;display:flex;flex-direction:column;justify-content:center;gap:6pt}
.row{display:flex;align-items:center;padding:7pt 12pt;border-radius:5pt}
.row.hi{background:${C.lbblue}}
.num{color:${C.accent};font-size:13pt;font-weight:bold;min-width:56pt;margin:0}
.ttl{color:${C.dark};font-size:12pt;margin:0}
</style></head><body>
<div class="left">
  <p class="toc-title">목차</p>
  <p class="toc-sub">Contents</p>
</div>
<div class="right">
  <div class="row"><p class="num">제 1 장</p><p class="ttl">서론</p></div>
  <div class="row"><p class="num">제 2 장</p><p class="ttl">관련 연구</p></div>
  <div class="row hi"><p class="num">제 3 장</p><p class="ttl">레이어2 기반 CBDC 시스템 설계 및 구현</p></div>
  <div class="row hi"><p class="num">제 4 장</p><p class="ttl">Optimistic Rollup 기반 분산 클라우드 스토리지 성능 개선</p></div>
  <div class="row hi"><p class="num">제 5 장</p><p class="ttl">ZK State Channel 기반 하이브리드 롤업 분쟁 프로토콜</p></div>
  <div class="row"><p class="num">제 6 장</p><p class="ttl">결론</p></div>
</div>
</body></html>`;
}

// ──────────────────────────────────────────────
// Section Divider
// ──────────────────────────────────────────────
function secSlide(num, titleHtml, eng) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
${bodyStyle(C.navy)}
body{flex-direction:column;align-items:center;justify-content:center}
.bg-num{color:rgba(255,255,255,0.07);font-size:130pt;font-weight:bold;position:absolute;bottom:-30pt;right:20pt;line-height:1;margin:0}
.label{color:${C.accent};font-size:15pt;font-weight:bold;letter-spacing:3pt;text-align:center;margin:0 0 10pt 0}
.line{width:70pt;height:3pt;background:${C.accent};margin:0 0 16pt 0}
h2{color:${C.white};font-size:28pt;font-weight:bold;text-align:center;margin:0;line-height:1.35}
.eng{color:${C.sky};font-size:13pt;text-align:center;margin:10pt 0 0 0}
</style></head><body>
<p class="bg-num">${num}</p>
<p class="label">제 ${num} 장</p>
<div class="line"></div>
<h2>${titleHtml}</h2>
<p class="eng">${eng}</p>
</body></html>`;
}

// ──────────────────────────────────────────────
// Content Slide Template
// ──────────────────────────────────────────────
function cs(chLabel, title, bodyHtml) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
${bodyStyle(C.white)}
body{flex-direction:column}
.hdr{height:52pt;background:${C.navy};display:flex;align-items:center;padding:0 26pt;flex-shrink:0}
.ch-tag{color:${C.sky};font-size:10pt;margin:0;white-space:nowrap}
.sep{color:#4a6fa0;font-size:18pt;margin:0 10pt}
.s-title{color:${C.white};font-size:17pt;font-weight:bold;margin:0}
.body{flex:1;padding:14pt 26pt 12pt 26pt;display:flex;flex-direction:column}
h3{color:${C.navy};font-size:13pt;font-weight:bold;margin:0 0 7pt 0;border-bottom:2pt solid ${C.lbblue};padding-bottom:3pt}
ul{margin:4pt 0;padding-left:18pt}
li{color:${C.dark};font-size:11.5pt;margin-bottom:4pt;line-height:1.4}
.two{display:flex;gap:14pt;flex:1}
.col{flex:1;display:flex;flex-direction:column}
.box{background:${C.bg};border-radius:5pt;padding:8pt 12pt;margin:0 0 6pt 0;border-left:4pt solid ${C.accent}}
.box p{color:${C.dark};font-size:11pt;margin:0;line-height:1.4}
.hi{background:${C.lbblue};border-radius:4pt;padding:7pt 11pt;margin:8pt 0 0 0}
.hi p{color:${C.navy};font-size:11pt;font-weight:bold;margin:0}
.note{color:${C.gray};font-size:10pt;margin:4pt 0 0 0}
</style></head><body>
<div class="hdr">
  <p class="ch-tag">${chLabel}</p>
  <p class="sep">|</p>
  <p class="s-title">${title}</p>
</div>
<div class="body">${bodyHtml}</div>
</body></html>`;
}

// ──────────────────────────────────────────────
// SLIDE CONTENT FUNCTIONS
// ──────────────────────────────────────────────

function s04() {
  return cs('제1장 서론', '연구 배경', `
<div class="two">
  <div class="col">
    <h3>블록체인 확장성 위기</h3>
    <ul>
      <li>이더리움 TPS: <b>~15 TPS</b> (VISA: 약 24,000 TPS)</li>
      <li>삼중 딜레마: 보안 · 탈중앙화 · 확장성 동시 달성 불가</li>
      <li>레이어2 기술로 확장성 보완 → 옵티미스틱 롤업 주목</li>
    </ul>
    <h3 style="margin-top:10pt">옵티미스틱 롤업의 한계</h3>
    <ul>
      <li>분쟁 해결 챌린지 기간: <b>7일</b></li>
      <li>온체인 다중 라운드 인터랙션 → 높은 가스비</li>
      <li>실 서비스 적용 시 <b>분쟁 경로</b>가 시스템 하한을 결정</li>
    </ul>
  </div>
  <div class="col">
    <div class="box"><p><b>정상 경로 (Happy Path)</b><br>배치 트랜잭션 → L2 처리 → L1 정산<br><b style="color:${C.green}">→ 빠르고 저렴</b></p></div>
    <div class="box" style="border-left-color:${C.red}"><p><b>분쟁 경로 (Dispute Path)</b><br>Fraud Proof → 온체인 게임 → 챌린지 기간<br><b style="color:${C.red}">→ 7일 지연, 고비용 병목</b></p></div>
    <div class="hi"><p>핵심 문제: 분쟁 경로가 전체 시스템 확정성 지연의 원인</p></div>
  </div>
</div>`);
}

function s05() {
  return cs('제1장 서론', '연구 목적 및 논문 구성', `
<div class="two">
  <div class="col">
    <h3>연구 목적</h3>
    <ul>
      <li>옵티미스틱 롤업의 <b>정상 경로</b> 최적화 → 실 응용 적용</li>
      <li>옵티미스틱 롤업의 <b>분쟁 경로</b> 최적화 → 하이브리드 설계</li>
      <li>두 경로를 통합한 <b>완전한 확장성 솔루션</b> 제시</li>
    </ul>
    <h3 style="margin-top:10pt">논문 구성 (귀납적 흐름)</h3>
    <ul>
      <li><b>3장:</b> CBDC 응용 → 분쟁 경로 요구사항 도출</li>
      <li><b>4장:</b> 스토리지 응용 → 분쟁 경로 문제 정식화</li>
      <li><b>5장:</b> ZK 하이브리드 프로토콜로 해결</li>
    </ul>
  </div>
  <div class="col">
    <div style="background:${C.navy};border-radius:8pt;padding:14pt;display:flex;flex-direction:column;gap:7pt">
      <div style="background:rgba(255,255,255,0.12);border-radius:4pt;padding:8pt"><p style="color:${C.white};font-size:11pt;margin:0"><b style="color:${C.sky}">3장</b>&nbsp; L2 기반 CBDC 응용 연구</p></div>
      <div style="text-align:center"><p style="color:${C.sky};font-size:13pt;margin:0">↓</p></div>
      <div style="background:rgba(255,255,255,0.12);border-radius:4pt;padding:8pt"><p style="color:${C.white};font-size:11pt;margin:0"><b style="color:${C.sky}">4장</b>&nbsp; OR 기반 스토리지 응용 연구</p></div>
      <div style="text-align:center"><p style="color:${C.sky};font-size:11pt;margin:0">↓ 공통 병목 도출</p></div>
      <div style="background:${C.accent};border-radius:4pt;padding:8pt"><p style="color:${C.white};font-size:11pt;font-weight:bold;margin:0"><b>5장</b>&nbsp; ZK 하이브리드 분쟁 프로토콜</p></div>
    </div>
  </div>
</div>`);
}

function s07() {
  return cs('제2장 관련 연구', '블록체인 확장성 문제와 삼중 딜레마', `
<div class="two">
  <div class="col">
    <h3>블록체인 삼중 딜레마 (Trilemma)</h3>
    <div style="display:flex;justify-content:center;margin:10pt 0">
      <div style="width:200pt;height:130pt;border:2pt solid ${C.accent};border-radius:8pt;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${C.bg}">
        <p style="color:${C.navy};font-size:13pt;font-weight:bold;margin:0 0 6pt 0">보안 (Security)</p>
        <p style="color:${C.accent};font-size:13pt;font-weight:bold;margin:0 0 6pt 0">탈중앙화 (Decentralization)</p>
        <p style="color:${C.gray};font-size:13pt;margin:0">확장성 (Scalability)</p>
      </div>
    </div>
    <p class="note" style="text-align:center">세 요소를 동시에 최대화하는 것은 불가능 (Buterin, 2021)</p>
  </div>
  <div class="col">
    <h3>TPS 비교 및 L2 필요성</h3>
    <div class="box" style="border-left-color:${C.red}"><p>Bitcoin: <b style="color:${C.red}">~7 TPS</b></p></div>
    <div class="box" style="border-left-color:${C.red}"><p>이더리움 L1: <b style="color:${C.red}">~15 TPS</b></p></div>
    <div class="box" style="border-left-color:${C.green}"><p>VISA: <b style="color:${C.green}">~24,000 TPS</b></p></div>
    <div class="box" style="border-left-color:${C.green}"><p>L2 롤업 (목표): <b style="color:${C.green}">2,000 ~ 4,000 TPS</b></p></div>
    <div class="hi"><p>→ 레이어2 기술로 확장성 문제 완화 필요</p></div>
  </div>
</div>`);
}

function s08_html() {
  return cs('제2장 관련 연구', '레이어2 확장 기술 개요', `
<h3 style="margin-bottom:8pt">레이어2 기술 비교</h3>
<div id="l2-table" class="placeholder" style="width:660pt;height:250pt;background:#e8effa"></div>`);
}

function s09() {
  return cs('제2장 관련 연구', '옵티미스틱 롤업 구조', `
<div class="two">
  <div class="col">
    <h3>동작 원리</h3>
    <ul>
      <li><b>낙관적 가정:</b> 제출된 트랜잭션이 유효하다고 가정</li>
      <li><b>배치 처리:</b> 다수 L2 트랜잭션을 L1에 일괄 제출</li>
      <li><b>챌린지 기간:</b> 7일 내 Fraud Proof 제출 가능</li>
      <li><b>인터랙티브 증명:</b> 다수 라운드 온체인 이등분 게임</li>
    </ul>
    <div class="hi" style="margin-top:10pt"><p>분쟁 발생 시: 다수 라운드 온체인 상호작용 → 비용/지연 급증</p></div>
  </div>
  <div class="col">
    <div style="background:${C.bg};border-radius:8pt;padding:10pt;display:flex;flex-direction:column;gap:6pt">
      <div style="background:${C.navy};border-radius:4pt;padding:8pt;text-align:center"><p style="color:${C.white};font-size:11pt;font-weight:bold;margin:0">L2 시퀀서 (Sequencer)</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:13pt;margin:0">↓ 배치 제출 (State Root)</p></div>
      <div style="background:${C.accent};border-radius:4pt;padding:8pt;text-align:center"><p style="color:${C.white};font-size:11pt;font-weight:bold;margin:0">L1 스마트 컨트랙트</p></div>
      <div style="display:flex;gap:6pt;margin-top:2pt">
        <div style="flex:1;background:${C.lbblue};border-radius:4pt;padding:7pt;text-align:center"><p style="color:${C.navy};font-size:10pt;font-weight:bold;margin:0">정상 경로<br>7일 후 확정</p></div>
        <div style="flex:1;background:#FDDEDE;border-radius:4pt;padding:7pt;text-align:center"><p style="color:${C.red};font-size:10pt;font-weight:bold;margin:0">분쟁 경로<br>Fraud Proof</p></div>
      </div>
    </div>
  </div>
</div>`);
}

function s10() {
  return cs('제2장 관련 연구', '영지식 증명 기초 이론', `
<div class="two">
  <div class="col">
    <h3>영지식 증명 (ZKP) 개요</h3>
    <ul>
      <li><b>정의:</b> 정보를 공개하지 않고 지식 보유 증명</li>
      <li><b>ZK-SNARK:</b> 간결한 비대화형 지식 증명</li>
      <li><b>ZK-STARK:</b> 투명성·확장성 우선, 증명 크기 큼</li>
    </ul>
    <h3 style="margin-top:10pt">Groth16 프로토콜</h3>
    <ul>
      <li>가장 효율적인 ZK-SNARK 방식 중 하나</li>
      <li>온체인 검증 가스: <b>~233K gas</b></li>
      <li>상수 크기 증명 (3개 타원곡선 점)</li>
    </ul>
  </div>
  <div class="col">
    <div class="box" style="border-left-color:${C.green}">
      <p><b>온체인 검증 특성</b><br>증명 크기: 일정 (입력과 무관)<br>검증 시간: O(1) · 단일 트랜잭션으로 완결</p>
    </div>
    <div class="box">
      <p><b>핵심 속성</b><br>완전성 (Completeness)<br>건전성 (Soundness)<br>영지식성 (Zero-Knowledge)</p>
    </div>
    <div class="hi"><p>5장에서 분쟁 해결에 Groth16 적용</p></div>
  </div>
</div>`);
}

function s11() {
  return cs('제2장 관련 연구', '기존 온체인 분쟁 해결 방식 및 한계', `
<div class="two">
  <div class="col">
    <h3>기존 Interactive Proof Game</h3>
    <ul>
      <li><b>이등분 탐색:</b> 도전자-방어자 간 불일치 지점을 반씩 좁혀가는 방식</li>
      <li><b>대표 구현:</b> Optimism Cannon FPVM</li>
      <li><b>단일 스텝 증명:</b> 최종 불일치 명령어 온체인 실행</li>
      <li>모든 탐색 라운드가 <b>온체인 트랜잭션</b>으로 발생</li>
    </ul>
  </div>
  <div class="col">
    <h3>기존 방식의 한계</h3>
    <div class="box" style="border-left-color:${C.red}"><p><b style="color:${C.red}">O(log n) 라운드 온체인 상호작용</b><br>각 라운드마다 L1 트랜잭션 발생 → 가스비 누적</p></div>
    <div class="box" style="border-left-color:${C.red}"><p><b style="color:${C.red}">확정성 지연: 7일</b><br>챌린지 기간 종료 전 출금·정산 불가</p></div>
    <div class="box" style="border-left-color:${C.orange}"><p><b style="color:${C.orange}">DoS 위험:</b> 다수 라운드 → 공격자가 지연 유발 가능</p></div>
    <div class="hi"><p>→ 5장에서 ZK State Channel로 이 문제를 해결</p></div>
  </div>
</div>`);
}

function s13() {
  return cs('제3장 L2 기반 CBDC', 'CBDC 시스템 개요 및 설계 목표', `
<div class="two">
  <div class="col">
    <h3>CBDC 시스템 요구사항</h3>
    <ul>
      <li><b>고처리량:</b> 대규모 결제 트랜잭션 처리</li>
      <li><b>프라이버시:</b> 사용자 거래 내역 보호</li>
      <li><b>규제 준수:</b> 중앙은행 감시 및 감사 가능성</li>
      <li><b>신뢰 모델:</b> 반중앙화 (Semi-centralized)</li>
    </ul>
    <h3 style="margin-top:10pt">설계 목표</h3>
    <ul>
      <li>L1 보안을 유지하면서 L2 성능 확보</li>
      <li>배치 처리로 온체인 비용 대폭 절감</li>
    </ul>
  </div>
  <div class="col">
    <h3>시스템 참여자 구성</h3>
    <div style="display:flex;flex-direction:column;gap:6pt">
      <div style="background:${C.navy};border-radius:4pt;padding:8pt;text-align:center"><p style="color:${C.white};font-size:12pt;font-weight:bold;margin:0">중앙은행 (Central Bank)</p><p style="color:${C.sky};font-size:10pt;margin:2pt 0 0 0">L1 컨트랙트 배포 · 정책 수립</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:12pt;margin:0">↕</p></div>
      <div style="background:${C.accent};border-radius:4pt;padding:8pt;text-align:center"><p style="color:${C.white};font-size:12pt;font-weight:bold;margin:0">상업은행 (Commercial Bank)</p><p style="color:${C.lbblue};font-size:10pt;margin:2pt 0 0 0">L2 시퀀서 운영 · 배치 제출</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:12pt;margin:0">↕</p></div>
      <div style="background:${C.lbblue};border-radius:4pt;padding:8pt;text-align:center"><p style="color:${C.navy};font-size:12pt;font-weight:bold;margin:0">사용자 (End User)</p><p style="color:${C.gray};font-size:10pt;margin:2pt 0 0 0">L2에서 저비용 결제</p></div>
    </div>
  </div>
</div>`);
}

function s14() {
  return cs('제3장 L2 기반 CBDC', '시스템 아키텍처 및 L1-L2 연계 설계', `
<div class="two">
  <div class="col">
    <h3>L1-L2 이중 레이어 구조</h3>
    <div style="display:flex;flex-direction:column;gap:5pt">
      <div style="background:#E8F4E8;border:2pt solid #27AE60;border-radius:6pt;padding:8pt;text-align:center"><p style="color:#155724;font-size:12pt;font-weight:bold;margin:0">L1 (이더리움 메인넷)</p><p style="color:#155724;font-size:10pt;margin:2pt 0 0 0">보안 · 최종 정산 · 분쟁 해결</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:11pt;margin:0">↑ 배치 제출 (State Root)</p></div>
      <div style="background:${C.lbblue};border:2pt solid ${C.accent};border-radius:6pt;padding:8pt;text-align:center"><p style="color:${C.navy};font-size:12pt;font-weight:bold;margin:0">L2 롤업 레이어</p><p style="color:${C.navy};font-size:10pt;margin:2pt 0 0 0">고속 처리 · 저비용 · CBDC 트랜잭션</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:11pt;margin:0">↑ 사용자 트랜잭션</p></div>
      <div style="background:${C.bg};border-radius:6pt;padding:6pt;text-align:center"><p style="color:${C.dark};font-size:11pt;font-weight:bold;margin:0">중앙은행 / 상업은행 / 사용자</p></div>
    </div>
  </div>
  <div class="col">
    <h3>트랜잭션 처리 흐름</h3>
    <ul>
      <li><b>Step 1:</b> 사용자 → L2 트랜잭션 제출</li>
      <li><b>Step 2:</b> 시퀀서 → 배치 생성 및 처리</li>
      <li><b>Step 3:</b> 배치 → L1 컨트랙트 제출</li>
      <li><b>Step 4:</b> 챌린지 기간 경과 → 확정</li>
      <li><b>Step 5:</b> 사용자 → L1으로 출금 가능</li>
    </ul>
    <div class="hi"><p>정상 경로: 빠른 L2 처리 → 배치 집약 → 저비용 정산</p></div>
  </div>
</div>`);
}

function s15() {
  return cs('제3장 L2 기반 CBDC', '실험 결과 및 소결', `
<div class="two">
  <div class="col">
    <h3>실험 결과: 정상 경로 성능</h3>
    <div class="box" style="border-left-color:${C.green}"><p>처리량: <b style="color:${C.green}">L2 적용 시 대폭 향상</b></p></div>
    <div class="box" style="border-left-color:${C.green}"><p>트랜잭션 비용: <b style="color:${C.green}">배치 처리로 건당 비용 절감</b></p></div>
    <div class="box" style="border-left-color:${C.green}"><p>운영 지연: L1 직접 제출 대비 개선</p></div>
    <p class="note">* 정상 경로 기준 (분쟁 없는 시나리오)</p>
  </div>
  <div class="col">
    <h3>소결: 분쟁 경로 요구사항 도출</h3>
    <div class="box" style="border-left-color:${C.orange}">
      <p><b>발견된 잔존 병목:</b><br>정상 경로는 개선되었으나,<br>분쟁 발생 시 <b style="color:${C.red}">7일 챌린지 기간</b>과<br><b style="color:${C.red}">높은 온체인 비용</b>은 미해결</p>
    </div>
    <div class="hi" style="margin-top:10pt">
      <p>→ 분쟁 경로 최적화 필요: 4장에서 동일 문제 재확인 → 5장에서 해결</p>
    </div>
  </div>
</div>`);
}

function s17() {
  return cs('제4장 OR 기반 분산 스토리지', 'OR 기반 분산 클라우드 스토리지 개요', `
<div class="two">
  <div class="col">
    <h3>분산 스토리지 병목 문제</h3>
    <ul>
      <li><b>온체인 메타데이터 비용</b> 과다 발생</li>
      <li>파일 접근 · 소유권 기록을 매 트랜잭션마다 L1 저장</li>
      <li>소규모 파일도 높은 가스비 → 서비스 확장 불가</li>
    </ul>
    <h3 style="margin-top:10pt">롤업 적용 설계</h3>
    <ul>
      <li><b>배치 처리:</b> 다수 메타데이터 트랜잭션 묶음 제출</li>
      <li><b>비용 구조:</b> 트랜잭션당 비용 → 배치당 비용 분산</li>
      <li><b>데이터 흐름:</b> 오프체인 스토리지 + 온체인 증명</li>
    </ul>
  </div>
  <div class="col">
    <h3>온체인 / 오프체인 구성</h3>
    <div style="display:flex;flex-direction:column;gap:6pt">
      <div style="background:${C.lbblue};border-radius:6pt;padding:8pt">
        <p style="color:${C.navy};font-size:11pt;font-weight:bold;margin:0 0 4pt 0">온체인 (L1)</p>
        <ul style="margin:0;padding-left:14pt"><li style="font-size:10pt;color:${C.dark}">메타데이터 루트 해시 저장</li><li style="font-size:10pt;color:${C.dark}">소유권 증명 컨트랙트</li></ul>
      </div>
      <div style="background:${C.bg};border-radius:6pt;padding:8pt">
        <p style="color:${C.navy};font-size:11pt;font-weight:bold;margin:0 0 4pt 0">오프체인 (L2 + IPFS)</p>
        <ul style="margin:0;padding-left:14pt"><li style="font-size:10pt;color:${C.dark}">실제 파일 데이터 저장</li><li style="font-size:10pt;color:${C.dark}">메타데이터 배치 처리</li></ul>
      </div>
    </div>
  </div>
</div>`);
}

function s18() {
  return cs('제4장 OR 기반 분산 스토리지', '실험 결과 및 소결', `
<div class="two">
  <div class="col">
    <h3>실험 결과</h3>
    <div class="box" style="border-left-color:${C.green}"><p>온체인 비용: <b style="color:${C.green}">배치 처리로 ~90% 절감</b></p></div>
    <div class="box" style="border-left-color:${C.green}"><p>처리 시간: <b style="color:${C.green}">배치 집약으로 처리량 향상</b></p></div>
    <div class="box" style="border-left-color:${C.green}"><p>확장성: <b style="color:${C.green}">대용량 파일 시스템 적용 가능</b></p></div>
  </div>
  <div class="col">
    <h3>소결: 분쟁 경로 문제 정식화</h3>
    <div class="box" style="border-left-color:${C.orange}">
      <p><b>공통 발견 (3장 + 4장):</b><br>정상 경로 개선에도 불구하고,<br><b style="color:${C.red}">분쟁 발생 시 시스템 하한</b>은<br>여전히 7일 챌린지 기간에 종속</p>
    </div>
    <div style="background:${C.navy};border-radius:6pt;padding:10pt;margin-top:8pt">
      <p style="color:${C.white};font-size:12pt;font-weight:bold;margin:0 0 5pt 0;text-align:center">3장 + 4장 공통 도출</p>
      <p style="color:${C.sky};font-size:11pt;margin:0;text-align:center">"분쟁 경로 최적화 없이는<br>완전한 확장성 달성 불가"</p>
    </div>
  </div>
</div>`);
}

function s20() {
  return cs('제5장 ZK State Channel 기반 하이브리드 프로토콜', '문제 정의 및 설계 목표', `
<div class="two">
  <div class="col">
    <h3>기존 분쟁게임 문제 정의</h3>
    <div class="box" style="border-left-color:${C.red}"><p><b>상호작용 비용:</b> O(log n) 라운드 온체인 트랜잭션<br>각 라운드: 수십만 gas 소모</p></div>
    <div class="box" style="border-left-color:${C.red}"><p><b>확정성 지연:</b> 챌린지 기간 7일<br>출금 · 정산 불가 상태 유지</p></div>
    <div class="box" style="border-left-color:${C.orange}"><p><b>DoS 위험:</b> 다수 라운드 → 공격자 지연 유발 가능</p></div>
  </div>
  <div class="col">
    <h3>설계 목표</h3>
    <ul>
      <li><b>저상호작용:</b> 온체인 라운드 최소화 (목표: 1회)</li>
      <li><b>저비용:</b> 가스 비용 대폭 절감</li>
      <li><b>단시간 확정:</b> 챌린지 기간 99% 이상 단축</li>
      <li><b>안전한 Fallback:</b> ZK 실패 시 기존 방식으로 복귀</li>
      <li><b>보안성 유지:</b> 정당성 · 건전성 형식 보장</li>
    </ul>
    <div class="hi"><p>→ 오프체인 분쟁 해결 + 단 1회 온체인 ZK 검증으로 즉시 확정</p></div>
  </div>
</div>`);
}

function s21() {
  return cs('제5장 ZK State Channel 기반 하이브리드 프로토콜', '제안 프로토콜 개요', `
<h3 style="margin-bottom:10pt">3단계 하이브리드 구조</h3>
<div style="display:flex;gap:10pt;align-items:stretch;flex:1">
  <div style="flex:1;background:${C.navy};border-radius:8pt;padding:12pt;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <p style="color:${C.sky};font-size:12pt;font-weight:bold;margin:0 0 6pt 0;text-align:center">① 오프체인 이등분</p>
    <p style="color:${C.white};font-size:10pt;margin:0;text-align:center">ZK State Channel 내<br>이등분 탐색 수행<br>(O(log n) 오프체인 라운드)</p>
  </div>
  <div style="display:flex;align-items:center;flex-shrink:0"><p style="color:${C.accent};font-size:22pt;font-weight:bold;margin:0">→</p></div>
  <div style="flex:1;background:${C.blue};border-radius:8pt;padding:12pt;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <p style="color:${C.lbblue};font-size:12pt;font-weight:bold;margin:0 0 6pt 0;text-align:center">② 온디맨드 ZK 증명</p>
    <p style="color:${C.white};font-size:10pt;margin:0;text-align:center">분쟁 지점에서만<br>Groth16 ZK Proof 생성<br>(RVP)</p>
  </div>
  <div style="display:flex;align-items:center;flex-shrink:0"><p style="color:${C.accent};font-size:22pt;font-weight:bold;margin:0">→</p></div>
  <div style="flex:1;background:${C.accent};border-radius:8pt;padding:12pt;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <p style="color:${C.white};font-size:12pt;font-weight:bold;margin:0 0 6pt 0;text-align:center">③ 단일 온체인 확정</p>
    <p style="color:${C.lbblue};font-size:10pt;margin:0;text-align:center">1회 트랜잭션으로<br>ZK Proof 온체인 검증<br>→ 즉시 확정</p>
  </div>
</div>
<div style="background:${C.bg};border-radius:5pt;padding:8pt;margin-top:8pt">
  <p style="color:${C.dark};font-size:11pt;font-weight:bold;margin:0;text-align:center">ZK 실패 시 Fallback → 기존 Interactive Proof Game으로 안전 복귀</p>
</div>`);
}

function s22() {
  return cs('제5장 ZK State Channel 기반 하이브리드 프로토콜', '프로토콜 상세: 오프체인 이등분', `
<div class="two">
  <div class="col">
    <h3>오프체인 이등분 탐색</h3>
    <ul>
      <li><b>ZK State Channel:</b> 양 당사자 간 P2P 채널 개설</li>
      <li><b>이등분 알고리즘:</b> 실행 트레이스를 반씩 좁혀 불일치 지점 탐색</li>
      <li><b>모든 과정 오프체인:</b> L1 트랜잭션 불필요</li>
      <li><b>서명 기반 상태 업데이트:</b> 각 단계 암호학적 보증</li>
    </ul>
    <div class="hi" style="margin-top:10pt"><p>온체인 탐색 비용 = 0 gas<br>탐색 완료 후 단 1회 ZK Proof 제출</p></div>
  </div>
  <div class="col">
    <h3>라운드 비용 비교</h3>
    <div class="box" style="border-left-color:${C.red}"><p><b style="color:${C.red}">기존 (온체인 이등분)</b><br>O(log n) 라운드 × 온체인 트랜잭션<br>→ 수십~수백만 gas</p></div>
    <div class="box" style="border-left-color:${C.green}"><p><b style="color:${C.green}">제안 (오프체인 이등분)</b><br>O(log n) 라운드 × 오프체인 메시지<br>→ 온체인 비용 = 0</p></div>
    <div style="background:${C.navy};border-radius:6pt;padding:8pt;margin-top:6pt;text-align:center">
      <p style="color:${C.white};font-size:12pt;font-weight:bold;margin:0">탐색 비용: <span style="color:${C.sky}">O(log n) gas → 0 gas</span></p>
    </div>
  </div>
</div>`);
}

function s23() {
  return cs('제5장 ZK State Channel 기반 하이브리드 프로토콜', '프로토콜 상세: 온디맨드 유효성 증명 (RVP)', `
<div class="two">
  <div class="col">
    <h3>온디맨드 유효성 증명 (RVP)</h3>
    <ul>
      <li><b>Requested Validity Proof:</b> 분쟁 지점 특정 후에만 ZK Proof 생성</li>
      <li><b>circom 2.1 + Groth16:</b> 단일 명령어 실행 검증 회로</li>
      <li><b>증명 생성:</b> 오프체인 prover가 수행</li>
      <li><b>온체인 검증:</b> 1회 트랜잭션으로 완결</li>
    </ul>
  </div>
  <div class="col">
    <h3>검증 단계</h3>
    <div style="display:flex;flex-direction:column;gap:5pt">
      <div style="background:${C.bg};border-radius:4pt;padding:7pt"><p style="color:${C.dark};font-size:11pt;margin:0"><b>1.</b> 이등분 완료 → 불일치 지점 특정</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:12pt;margin:0">↓</p></div>
      <div style="background:${C.bg};border-radius:4pt;padding:7pt"><p style="color:${C.dark};font-size:11pt;margin:0"><b>2.</b> Prover: ZK Proof 오프체인 생성</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:12pt;margin:0">↓</p></div>
      <div style="background:${C.bg};border-radius:4pt;padding:7pt"><p style="color:${C.dark};font-size:11pt;margin:0"><b>3.</b> L1 컨트랙트: verifyProof() 호출</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:12pt;margin:0">↓</p></div>
      <div style="background:${C.lbblue};border-radius:4pt;padding:7pt"><p style="color:${C.navy};font-size:11pt;font-weight:bold;margin:0">검증 가스: ~233K gas · 즉시 확정</p></div>
    </div>
  </div>
</div>`);
}

function s24() {
  return cs('제5장 ZK State Channel 기반 하이브리드 프로토콜', '안전성 분석', `
<div class="two">
  <div class="col">
    <h3>형식적 안전성 분석</h3>
    <div class="box" style="border-left-color:${C.green}"><p><b>완전성 (Completeness)</b><br>정직한 참여자는 항상 분쟁에서 승리</p></div>
    <div class="box" style="border-left-color:${C.green}"><p><b>건전성 (Soundness)</b><br>악의적 참여자는 ZK 증명 위조 불가<br>(암호학적 가정 하에)</p></div>
    <div class="box" style="border-left-color:${C.green}"><p><b>종료성 (Termination)</b><br>유한 이등분 라운드 후 반드시 종료</p></div>
  </div>
  <div class="col">
    <h3>공격 시나리오 대응</h3>
    <div class="box" style="border-left-color:${C.orange}"><p><b>검열 공격:</b> 타임아웃 메커니즘으로 일방 무응답 시 자동 승리</p></div>
    <div class="box" style="border-left-color:${C.orange}"><p><b>담합 공격:</b> L1 컨트랙트 기반 최종 검증으로 담합 무효화</p></div>
    <div class="box" style="border-left-color:${C.orange}"><p><b>DoS 공격:</b> 오프체인 처리로 온체인 가스 소진 공격 원천 차단</p></div>
    <div class="hi"><p><b>Fallback:</b> ZK 증명 실패 시 기존 Fraud Proof 게임으로 안전 복귀</p></div>
  </div>
</div>`);
}

function s25_html() {
  return cs('제5장 ZK State Channel 기반 하이브리드 프로토콜', '성능 및 비용 평가 결과', `
<h3 style="margin-bottom:8pt">핵심 평가 지표</h3>
<div id="perf-table" class="placeholder" style="width:660pt;height:250pt;background:#e8effa"></div>`);
}

function s27() {
  return cs('제6장 결론', '연구 요약', `
<div class="two">
  <div class="col">
    <h3>3개 연구의 통합 기여</h3>
    <ul>
      <li><b>3장 (정상 경로 ①):</b> L2 기반 CBDC 구현<br>→ 처리량·비용 개선 확인, 분쟁 경로 요구사항 도출</li>
      <li style="margin-top:7pt"><b>4장 (정상 경로 ②):</b> OR 기반 분산 스토리지<br>→ 온체인 비용 절감, "분쟁 경로 = 시스템 하한" 정식화</li>
      <li style="margin-top:7pt"><b>5장 (분쟁 경로 최적화):</b> ZK 하이브리드 프로토콜<br>→ 7일 → 47분, 가스 84.8% 절감</li>
    </ul>
  </div>
  <div class="col">
    <h3>귀납적 연구 흐름</h3>
    <div style="display:flex;flex-direction:column;gap:6pt">
      <div style="background:${C.lbblue};border-radius:6pt;padding:8pt;text-align:center"><p style="color:${C.navy};font-size:12pt;font-weight:bold;margin:0">응용 연구 (3·4장)</p><p style="color:${C.gray};font-size:10pt;margin:2pt 0 0 0">CBDC + 분산 스토리지</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:13pt;margin:0">↓ 공통 병목 발견</p></div>
      <div style="background:${C.bg};border-radius:6pt;padding:8pt;text-align:center"><p style="color:${C.navy};font-size:12pt;font-weight:bold;margin:0">문제 정식화</p><p style="color:${C.gray};font-size:10pt;margin:2pt 0 0 0">"분쟁 경로 = 시스템 하한"</p></div>
      <div style="text-align:center"><p style="color:${C.accent};font-size:13pt;margin:0">↓ 해결책 도출</p></div>
      <div style="background:${C.navy};border-radius:6pt;padding:8pt;text-align:center"><p style="color:${C.white};font-size:12pt;font-weight:bold;margin:0">ZK 하이브리드 프로토콜 (5장)</p><p style="color:${C.sky};font-size:10pt;margin:2pt 0 0 0">완전한 확장성 솔루션</p></div>
    </div>
  </div>
</div>`);
}

function s28() {
  return cs('제6장 결론', '핵심 기여 정리', `
<div style="display:flex;flex-direction:column;gap:10pt;flex:1;justify-content:center">
  <div style="display:flex;gap:12pt;align-items:stretch">
    <div style="width:34pt;background:${C.navy};border-radius:6pt;display:flex;align-items:center;justify-content:center;flex-shrink:0"><p style="color:${C.white};font-size:18pt;font-weight:bold;margin:0">1</p></div>
    <div style="flex:1;background:${C.lbblue};border-radius:6pt;padding:10pt 14pt">
      <p style="color:${C.navy};font-size:13pt;font-weight:bold;margin:0 0 3pt 0">레이어2 기반 CBDC 시스템 설계 및 구현 (3장)</p>
      <p style="color:${C.gray};font-size:11pt;margin:0">옵티미스틱 롤업을 활용한 고성능·저비용 CBDC 아키텍처 제안 및 검증</p>
    </div>
  </div>
  <div style="display:flex;gap:12pt;align-items:stretch">
    <div style="width:34pt;background:${C.blue};border-radius:6pt;display:flex;align-items:center;justify-content:center;flex-shrink:0"><p style="color:${C.white};font-size:18pt;font-weight:bold;margin:0">2</p></div>
    <div style="flex:1;background:${C.lbblue};border-radius:6pt;padding:10pt 14pt">
      <p style="color:${C.navy};font-size:13pt;font-weight:bold;margin:0 0 3pt 0">OR 기반 분산 클라우드 스토리지 성능 개선 (4장)</p>
      <p style="color:${C.gray};font-size:11pt;margin:0">배치 처리 기반 온체인 메타데이터 비용 절감 방법론 및 실증</p>
    </div>
  </div>
  <div style="display:flex;gap:12pt;align-items:stretch">
    <div style="width:34pt;background:${C.accent};border-radius:6pt;display:flex;align-items:center;justify-content:center;flex-shrink:0"><p style="color:${C.white};font-size:18pt;font-weight:bold;margin:0">3</p></div>
    <div style="flex:1;background:${C.lbblue};border-radius:6pt;padding:10pt 14pt">
      <p style="color:${C.navy};font-size:13pt;font-weight:bold;margin:0 0 3pt 0">ZK State Channel 기반 하이브리드 분쟁 프로토콜 (5장)</p>
      <p style="color:${C.gray};font-size:11pt;margin:0">확정 시간 99.5% 단축 · 가스 84.8% 절감 · 보안성 형식 분석 완료</p>
    </div>
  </div>
</div>`);
}

function s29() {
  return cs('제6장 결론', '한계 및 향후 연구 과제', `
<div class="two">
  <div class="col">
    <h3>연구 한계</h3>
    <ul>
      <li><b>일반화 한계:</b> 이더리움 기반 롤업에 집중<br>다른 L1/L2 플랫폼 적용 미검증</li>
      <li><b>실증 환경:</b> 테스트넷 기반 실험<br>메인넷 프로덕션 환경 검증 필요</li>
      <li><b>ZK 증명 생성:</b> 오프체인 prover 성능에 의존<br>하드웨어 가속 미적용</li>
      <li><b>표준화:</b> 프로토콜 공식 표준화 미진행</li>
    </ul>
  </div>
  <div class="col">
    <h3>향후 연구 과제</h3>
    <div class="box" style="border-left-color:${C.accent}"><p><b>일반화:</b> Arbitrum, zkSync 등 다양한 L2 적용 연구</p></div>
    <div class="box" style="border-left-color:${C.accent}"><p><b>ZK 최적화:</b> PLONK, Halo2 등 최신 증명 시스템 적용</p></div>
    <div class="box" style="border-left-color:${C.accent}"><p><b>표준화:</b> EIP (Ethereum Improvement Proposal) 제안</p></div>
    <div class="box" style="border-left-color:${C.accent}"><p><b>확장:</b> 멀티파티 채널, 크로스체인 분쟁 해결 확장</p></div>
  </div>
</div>`);
}

function s30() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
${bodyStyle(C.navy)}
body{flex-direction:column;align-items:stretch}
.top{height:6pt;background:${C.accent};flex-shrink:0}
.bot{height:6pt;background:${C.accent};flex-shrink:0}
.main{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}
h1{color:${C.white};font-size:52pt;font-weight:bold;text-align:center;margin:0 0 8pt 0}
.sub{color:${C.sky};font-size:20pt;text-align:center;margin:0 0 24pt 0}
.divider{width:180pt;height:2pt;background:${C.accent};margin:0 0 18pt 0}
.qa{color:${C.lbblue};font-size:24pt;font-weight:bold;text-align:center;margin:0}
.author{color:#B8CCE8;font-size:13pt;text-align:center;margin:10pt 0 0 0}
</style></head><body>
<div class="top"></div>
<div class="main">
  <h1>감사합니다</h1>
  <p class="sub">Thank You</p>
  <div class="divider"></div>
  <p class="qa">Q &amp; A</p>
  <p class="author">황재승 &nbsp;|&nbsp; 숭실대학교 대학원 AI IT융합학과</p>
</div>
<div class="bot"></div>
</body></html>`;
}

// ──────────────────────────────────────────────
// MAIN
// ──────────────────────────────────────────────
async function main() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = '옵티미스틱 롤업의 확장성 향상을 위한 하이브리드 프로토콜 설계 및 응용에 관한 연구';
  pptx.author = '황재승';

  let idx = 0;
  async function add(html) {
    const p = path.join(TMP, `s${String(++idx).padStart(2,'0')}.html`);
    fs.writeFileSync(p, html, 'utf-8');
    return html2pptx(p, pptx);
  }

  // ── 표지 & 목차
  await add(s01());
  await add(s02());

  // ── 제1장
  await add(secSlide('1', '서론', 'Introduction'));
  await add(s04());
  await add(s05());

  // ── 제2장
  await add(secSlide('2', '관련 연구', 'Related Work'));
  await add(s07());

  // L2 비교 테이블
  const { slide: sl08, placeholders: ph08 } = await add(s08_html());
  sl08.addTable([
    [
      { text: '구분', options: { fill: { color: '1B3A6B' }, color: 'FFFFFF', bold: true, fontSize: 10, align: 'center' } },
      { text: '상태 채널', options: { fill: { color: '1B3A6B' }, color: 'FFFFFF', bold: true, fontSize: 10, align: 'center' } },
      { text: '플라즈마', options: { fill: { color: '1B3A6B' }, color: 'FFFFFF', bold: true, fontSize: 10, align: 'center' } },
      { text: '옵티미스틱 롤업', options: { fill: { color: '1B3A6B' }, color: 'FFFFFF', bold: true, fontSize: 10, align: 'center' } },
      { text: 'ZK 롤업', options: { fill: { color: '1B3A6B' }, color: 'FFFFFF', bold: true, fontSize: 10, align: 'center' } },
    ],
    ['데이터 가용성', '오프체인', '오프체인', '온체인', '온체인'],
    ['확정성 지연', '즉시', '1주일+', '7일 (챌린지)', '즉시'],
    ['증명 방식', '없음', 'Fraud Proof', 'Fraud Proof', 'Validity Proof'],
    ['처리량 (TPS)', '매우 높음', '높음', '높음', '중간'],
    ['EVM 호환성', '부분', '부분', '완전', '제한적'],
    [{ text: '분쟁 비용', options: { bold: true } }, '낮음', '높음', { text: '높음 (핵심 문제)', options: { color: 'C0392B', bold: true } }, '없음'],
  ], {
    ...ph08[0],
    colW: [1.7, 1.5, 1.5, 2.0, 1.5],
    rowH: [0.40, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38],
    border: { pt: 1, color: 'CCCCCC' },
    align: 'center',
    valign: 'middle',
    fontSize: 10,
    fill: { color: 'F5F8FF' },
  });

  await add(s09());
  await add(s10());
  await add(s11());

  // ── 제3장
  await add(secSlide('3', '레이어2 기반 CBDC 시스템<br>설계 및 구현', 'L2-based CBDC System Design'));
  await add(s13());
  await add(s14());
  await add(s15());

  // ── 제4장
  await add(secSlide('4', 'OR 기반 분산 클라우드<br>스토리지 성능 개선', 'OR-based Distributed Storage'));
  await add(s17());
  await add(s18());

  // ── 제5장
  await add(secSlide('5', 'ZK State Channel 기반<br>하이브리드 분쟁 프로토콜', 'ZK State Channel Hybrid Protocol'));
  await add(s20());
  await add(s21());
  await add(s22());
  await add(s23());
  await add(s24());

  // 성능 결과 테이블
  const { slide: sl25, placeholders: ph25 } = await add(s25_html());
  sl25.addTable([
    [
      { text: '평가 지표', options: { fill: { color: '1B3A6B' }, color: 'FFFFFF', bold: true, fontSize: 11, align: 'center' } },
      { text: '기존 방식 (Cannon)', options: { fill: { color: 'C0392B' }, color: 'FFFFFF', bold: true, fontSize: 11, align: 'center' } },
      { text: '제안 방식 (Zodiac)', options: { fill: { color: '27AE60' }, color: 'FFFFFF', bold: true, fontSize: 11, align: 'center' } },
      { text: '개선율', options: { fill: { color: '2E6DB4' }, color: 'FFFFFF', bold: true, fontSize: 11, align: 'center' } },
    ],
    [{ text: '확정성 시간', options: { bold: true, fontSize: 11 } },
     { text: '7일 (168시간)', options: { color: 'C0392B', fontSize: 11, align: 'center' } },
     { text: '~47분', options: { color: '27AE60', bold: true, fontSize: 11, align: 'center' } },
     { text: '99.5% ↓', options: { color: '27AE60', bold: true, fontSize: 12, align: 'center' } }],
    [{ text: '가스 비용', options: { bold: true, fontSize: 11 } },
     { text: '기준 (100%)', options: { color: 'C0392B', fontSize: 11, align: 'center' } },
     { text: '약 15.2%', options: { color: '27AE60', bold: true, fontSize: 11, align: 'center' } },
     { text: '84.8% ↓', options: { color: '27AE60', bold: true, fontSize: 12, align: 'center' } }],
    [{ text: 'ZK 검증 가스', options: { bold: true, fontSize: 11 } },
     { text: '-', options: { fontSize: 11, align: 'center' } },
     { text: '~233K gas', options: { color: '2E6DB4', bold: true, fontSize: 11, align: 'center' } },
     { text: 'O(1) 상수 시간', options: { color: '2E6DB4', fontSize: 11, align: 'center' } }],
    [{ text: '온체인 라운드', options: { bold: true, fontSize: 11 } },
     { text: 'O(log n) 라운드', options: { color: 'C0392B', fontSize: 11, align: 'center' } },
     { text: '1회 (단일 Proof)', options: { color: '27AE60', bold: true, fontSize: 11, align: 'center' } },
     { text: 'O(log n) → 1', options: { color: '27AE60', bold: true, fontSize: 11, align: 'center' } }],
    [{ text: '컨트랙트 테스트', options: { bold: true, fontSize: 11 } },
     { text: '-', options: { fontSize: 11, align: 'center' } },
     { text: '43개 통과', options: { color: '27AE60', bold: true, fontSize: 11, align: 'center' } },
     { text: '검증 완료', options: { color: '27AE60', fontSize: 11, align: 'center' } }],
  ], {
    ...ph25[0],
    colW: [2.4, 2.0, 2.2, 2.1],
    rowH: [0.46, 0.44, 0.44, 0.44, 0.44, 0.44],
    border: { pt: 1, color: 'DDDDDD' },
    align: 'left',
    valign: 'middle',
    fill: { color: 'FAFCFF' },
  });

  // ── 제6장
  await add(secSlide('6', '결론', 'Conclusion'));
  await add(s27());
  await add(s28());
  await add(s29());

  // ── 마무리
  await add(s30());

  await pptx.writeFile({ fileName: OUT });
  console.log('생성 완료:', OUT);
  console.log('총 슬라이드:', idx, '장');
}

main().catch(err => {
  console.error('오류:', err.message);
  if (err.stack) console.error(err.stack);
  process.exit(1);
});
