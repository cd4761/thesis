const pptxgen = require('pptxgenjs');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Jae-seung Hwang';
    pptx.title = '옵티미스틱 롤업의 분쟁 해결 지연 문제 극복을 위한 하이브리드 프로토콜 설계 및 응용';
    pptx.subject = '박사학위 청구논문';
    pptx.company = '숭실대학교';

    // Colors
    const navy = '1C2833';
    const teal = '17A2B8';
    const gold = 'F39C12';
    const red = 'E74C3C';
    const green = '27AE60';
    const gray = '566573';
    const lightGray = 'AAB7B8';
    const bgLight = 'F8F9FA';

    // Slide 1: Cover
    let slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: navy } });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.1, fill: { color: teal } });
    slide.addText('숭실대학교 대학원 컴퓨터학과', { x: 0.5, y: 1.5, w: 9, h: 0.4, fontSize: 14, color: gold, align: 'center', fontFace: 'Arial', bold: true });
    slide.addText('옵티미스틱 롤업의 분쟁 해결 지연 문제 극복을 위한\n하이브리드 프로토콜 설계 및 응용', { x: 0.5, y: 2.0, w: 9, h: 1.2, fontSize: 26, color: 'FFFFFF', align: 'center', fontFace: 'Arial', bold: true, valign: 'middle' });
    slide.addText('Design and Application of a Hybrid Protocol for Overcoming\nDispute Resolution Delays in Optimistic Rollups', { x: 0.5, y: 3.3, w: 9, h: 0.7, fontSize: 12, color: teal, align: 'center', fontFace: 'Arial' });
    slide.addText('박사학위 청구논문', { x: 0.5, y: 4.0, w: 9, h: 0.3, fontSize: 12, color: lightGray, align: 'center', fontFace: 'Arial' });
    slide.addText('지도교수: 김영한', { x: 0.5, y: 4.35, w: 9, h: 0.3, fontSize: 12, color: lightGray, align: 'center', fontFace: 'Arial' });
    slide.addText('황재승 (Jae-seung Hwang)', { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 12, color: lightGray, align: 'center', fontFace: 'Arial' });
    slide.addText('2025년 2월', { x: 0.5, y: 5.0, w: 9, h: 0.3, fontSize: 11, color: 'FFFFFF', align: 'center', fontFace: 'Arial' });
    slide.addNotes(`[발표 시작]
안녕하십니까. 숭실대학교 대학원 컴퓨터학과 황재승입니다.
오늘 "옵티미스틱 롤업의 분쟁 해결 지연 문제 극복을 위한 하이브리드 프로토콜 설계 및 응용"이라는 주제로 박사학위 청구논문 발표를 진행하겠습니다.

[예상 질문]
- 연구 기간은 얼마나 되었나요?
- 지도교수님과의 협업 방식은?`);

    // Slide 2: TOC
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('목 차', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    const tocItems = [
        { ch: '제 1 장', title: '서론' },
        { ch: '제 2 장', title: '관련 연구' },
        { ch: '제 3 장', title: '옵티미스틱 롤업 기반 CBDC 시스템' },
        { ch: '제 4 장', title: '옵티미스틱 롤업 기반 분산 스토리지' },
        { ch: '제 5 장', title: 'ZK 상태 채널 기반 하이브리드 분쟁 프로토콜', highlight: true },
        { ch: '제 6 장', title: '결론' }
    ];
    let yPos = 1.2;
    tocItems.forEach((item, idx) => {
        slide.addText(item.ch, { x: 0.5 + (idx < 4 ? 0 : 5), y: yPos, w: 1.5, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
        if (item.highlight) {
            slide.addShape(pptx.shapes.RECTANGLE, { x: 1.8 + (idx < 4 ? 0 : 5), y: yPos - 0.05, w: 3.5, h: 0.4, fill: { color: 'FEF9E7' }, line: { color: gold, width: 0.5 } });
        }
        slide.addText(item.title, { x: 1.9 + (idx < 4 ? 0 : 5), y: yPos, w: 3.3, h: 0.3, fontSize: item.highlight ? 12 : 13, color: navy, fontFace: 'Arial', bold: item.highlight });
        if (idx < 4) yPos += 0.6;
        if (idx === 3) yPos = 1.2;
    });
    slide.addNotes(`[목차 설명]
본 논문은 총 6개 장으로 구성되어 있습니다.

1장 서론에서는 연구 배경과 문제 정의를 다루고,
2장에서는 롤업 기술 관련 선행 연구를 살펴봅니다.

3장과 4장은 각각 제가 발표한 2편의 논문으로,
- 3장: 옵티미스틱 롤업 기반 CBDC 시스템 (출판 완료)
- 4장: 옵티미스틱 롤업 기반 분산 스토리지 (출판 확정)

5장이 본 논문의 핵심 기여인 ZK 상태 채널 기반 하이브리드 분쟁 프로토콜입니다.
6장에서 결론 및 향후 연구를 정리합니다.`);

    // Slide 3: Background
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('1. 연구 배경', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addText('블록체인 확장성 문제', { x: 0.5, y: 1.0, w: 4, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 0.8, fill: { color: 'FFFFFF' }, line: { color: red, width: 2 } });
    slide.addText('이더리움 메인넷: 15-30 TPS, 높은 가스 비용\n대중적 서비스 적용의 근본적 한계', { x: 0.6, y: 1.5, w: 8.8, h: 0.6, fontSize: 13, color: navy, fontFace: 'Arial' });
    slide.addText('블록체인 트릴레마', { x: 0.5, y: 2.4, w: 4, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    const trilemma = ['탈중앙화', '보안성', '확장성'];
    trilemma.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 1.5 + idx * 2.5, y: 2.8, w: 2, h: 0.6, fill: { color: navy }, rectRadius: 0.1 });
        slide.addText(item, { x: 1.5 + idx * 2.5, y: 2.85, w: 2, h: 0.5, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    });
    slide.addText('계층 2 솔루션의 등장', { x: 0.5, y: 3.7, w: 4, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.1, w: 9, h: 0.7, fill: { color: 'E8F8F5' }, line: { color: teal, width: 2 } });
    slide.addText('옵티미스틱 롤업: 오프체인 실행 + 온체인 검증\nArbitrum, Optimism 등 실제 운영 중', { x: 0.6, y: 4.2, w: 8.8, h: 0.5, fontSize: 13, color: navy, fontFace: 'Arial' });
    slide.addNotes(`[연구 배경]
블록체인 기술의 가장 큰 기술적 과제는 확장성입니다.

이더리움 메인넷은 초당 15-30건의 거래만 처리 가능하고,
가스 비용이 매우 높아 대중적 서비스 적용에 한계가 있습니다.

블록체인 트릴레마란 탈중앙화, 보안성, 확장성 세 가지를
동시에 달성하기 어렵다는 것을 의미합니다.

이를 해결하기 위해 계층 2 솔루션이 등장했으며,
그 중 옵티미스틱 롤업은 오프체인에서 트랜잭션을 실행하고
온체인에서 검증하는 방식으로 확장성을 제공합니다.

실제로 Arbitrum, Optimism, Base 등이 운영 중입니다.`);

    // Slide 4: Problem
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('1. 연구 배경 - 핵심 문제', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 1, y: 1.2, w: 8, h: 1, fill: { color: 'FDEDEC' }, line: { color: red, width: 3 }, rectRadius: 0.1 });
    slide.addText('옵티미스틱 롤업의 치명적 한계', { x: 1.1, y: 1.3, w: 7.8, h: 0.4, fontSize: 20, color: red, fontFace: 'Arial', bold: true, align: 'center' });
    slide.addText('분쟁 발생 시 7일간의 이의 제기 기간 필수', { x: 1.1, y: 1.75, w: 7.8, h: 0.3, fontSize: 14, color: navy, fontFace: 'Arial', align: 'center' });
    slide.addText('실질적 영향', { x: 0.5, y: 2.5, w: 4, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    const impacts = [
        { icon: '$', title: '금융 서비스', desc: '즉시 결제 불가' },
        { icon: '⏱', title: '실시간 거래', desc: '7일 대기 필수' },
        { icon: '!', title: '사용자 경험', desc: '서비스 제약' }
    ];
    impacts.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.8 + idx * 3, y: 2.9, w: 2.7, h: 1.3, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.2 }, rectRadius: 0.1 });
        slide.addText(item.icon, { x: 0.8 + idx * 3, y: 3.0, w: 2.7, h: 0.5, fontSize: 24, color: red, fontFace: 'Arial', align: 'center', bold: true });
        slide.addText(item.title + '\n' + item.desc, { x: 0.8 + idx * 3, y: 3.5, w: 2.7, h: 0.6, fontSize: 11, color: navy, fontFace: 'Arial', align: 'center' });
    });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.5, fill: { color: 'E8F8F5' }, line: { color: teal, width: 2 } });
    slide.addText('연구 목표: 7일 확정 지연 → 1~2시간으로 단축', { x: 0.6, y: 4.5, w: 8.8, h: 0.3, fontSize: 13, color: navy, fontFace: 'Arial', bold: true });
    slide.addNotes(`[핵심 문제 - 강조해서 설명]
옵티미스틱 롤업의 치명적인 한계점이 바로 "7일 확정 지연"입니다.

분쟁이 발생하면 7일간의 이의 제기 기간(Challenge Period)이 필수적으로 요구됩니다.
이는 사기 증명(Fraud Proof) 방식의 본질적 한계입니다.

실질적 영향:
- 금융 서비스: 즉시 결제가 불가능
- 실시간 거래: 7일을 기다려야 함
- 사용자 경험: 서비스 적용에 심각한 제약

본 연구의 목표는 이 7일 지연을 1~2시간으로 대폭 단축하는 것입니다.

[예상 질문]
Q: 왜 정확히 7일인가요?
A: 이더리움 네트워크 지연, 검증자 응답 시간 등을 고려한 보수적 설정입니다.`);

    // Slide 5: Contribution Overview
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('1. 연구 기여', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addText('학문적 기여', { x: 0.5, y: 1.0, w: 4, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    const contribs = [
        { title: '이론적 기여', desc: 'RVP 패러다임 제안' },
        { title: '기술적 기여', desc: '오프체인 이등분 +\n온디맨드 ZK 증명' },
        { title: '실증적 기여', desc: 'CBDC, 스토리지\n도메인 적용 검증' }
    ];
    contribs.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + idx * 3.1, y: 1.4, w: 2.9, h: 1.2, fill: { color: 'FFFFFF' }, line: { color: teal, width: 1, dashType: 'solid' }, rectRadius: 0.05 });
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + idx * 3.1, y: 1.4, w: 2.9, h: 0.05, fill: { color: teal } });
        slide.addText(item.title, { x: 0.6 + idx * 3.1, y: 1.5, w: 2.7, h: 0.3, fontSize: 13, color: navy, fontFace: 'Arial', bold: true });
        slide.addText(item.desc, { x: 0.6 + idx * 3.1, y: 1.85, w: 2.7, h: 0.6, fontSize: 11, color: gray, fontFace: 'Arial' });
    });
    slide.addText('연구 논문 구성', { x: 0.5, y: 2.8, w: 4, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    const papers = [
        { num: '1', title: '옵티미스틱 롤업 기반 CBDC 시스템', status: '출판 완료' },
        { num: '2', title: '옵티미스틱 롤업 기반 분산 스토리지', status: '출판 확정' },
        { num: '3', title: 'ZK 상태 채널 기반 하이브리드 분쟁 프로토콜', status: '초안 완성 (핵심 기여)' }
    ];
    papers.forEach((item, idx) => {
        slide.addShape(pptx.shapes.OVAL, { x: 0.6, y: 3.2 + idx * 0.5, w: 0.35, h: 0.35, fill: { color: navy } });
        slide.addText(item.num, { x: 0.6, y: 3.22 + idx * 0.5, w: 0.35, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center', bold: true });
        slide.addText(item.title, { x: 1.1, y: 3.2 + idx * 0.5, w: 5.5, h: 0.35, fontSize: 12, color: navy, fontFace: 'Arial' });
        slide.addText(item.status, { x: 6.8, y: 3.2 + idx * 0.5, w: 2.5, h: 0.35, fontSize: 10, color: teal, fontFace: 'Arial' });
    });
    slide.addNotes(`[연구 기여 요약]
본 연구의 학문적 기여는 크게 세 가지입니다:

1. 이론적 기여: RVP(Reactive Validity Proof) 패러다임 제안
   - 옵티미스틱과 ZK 롤업의 장점을 상황에 따라 적응적으로 결합

2. 기술적 기여: 오프체인 이등분 탐색 + 온디맨드 ZK 증명
   - 실제 구현 가능한 프로토콜 설계

3. 실증적 기여: CBDC와 분산 스토리지 두 도메인에서 검증
   - 다양한 응용 분야 적용 가능성 실증

본 논문은 3편의 연구 논문을 기반으로 합니다:
- 논문 1: CBDC 시스템 (출판 완료)
- 논문 2: 분산 스토리지 (출판 확정)
- 논문 3: 하이브리드 분쟁 프로토콜 (핵심 기여, 초안 완성)`);

    // Slide 6: Related Work - Rollup Comparison
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('2. 관련 연구 - 롤업 기술 비교', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    // Optimistic Rollup box
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.4, y: 1.0, w: 4.4, h: 2.5, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.15 }, rectRadius: 0.1 });
    slide.addText('옵티미스틱 롤업', { x: 0.5, y: 1.1, w: 4.2, h: 0.4, fontSize: 14, color: navy, fontFace: 'Arial', bold: true, line: { color: teal, width: 2 } });
    const optRows = [
        { label: '검증 방식', value: '사기 증명', good: false },
        { label: '확정 시간', value: '7일', bad: true },
        { label: '증명 비용', value: '낮음', good: true },
        { label: 'EVM 호환성', value: '높음', good: true }
    ];
    optRows.forEach((row, idx) => {
        slide.addText(row.label, { x: 0.6, y: 1.6 + idx * 0.4, w: 1.8, h: 0.35, fontSize: 11, color: gray, fontFace: 'Arial' });
        slide.addText(row.value, { x: 2.5, y: 1.6 + idx * 0.4, w: 2, h: 0.35, fontSize: 11, color: row.bad ? red : (row.good ? green : navy), fontFace: 'Arial', bold: true });
    });
    slide.addText('Arbitrum, Optimism, Base', { x: 0.6, y: 3.2, w: 4, h: 0.25, fontSize: 10, color: gray, fontFace: 'Arial', italic: true });
    // ZK Rollup box
    slide.addShape(pptx.shapes.RECTANGLE, { x: 5.2, y: 1.0, w: 4.4, h: 2.5, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.15 }, rectRadius: 0.1 });
    slide.addText('ZK 롤업', { x: 5.3, y: 1.1, w: 4.2, h: 0.4, fontSize: 14, color: navy, fontFace: 'Arial', bold: true, line: { color: teal, width: 2 } });
    const zkRows = [
        { label: '검증 방식', value: '유효성 증명', good: false },
        { label: '확정 시간', value: '즉시', good: true },
        { label: '증명 비용', value: '높음', bad: true },
        { label: 'EVM 호환성', value: '중간', good: false }
    ];
    zkRows.forEach((row, idx) => {
        slide.addText(row.label, { x: 5.4, y: 1.6 + idx * 0.4, w: 1.8, h: 0.35, fontSize: 11, color: gray, fontFace: 'Arial' });
        slide.addText(row.value, { x: 7.3, y: 1.6 + idx * 0.4, w: 2, h: 0.35, fontSize: 11, color: row.bad ? red : (row.good ? green : navy), fontFace: 'Arial', bold: true });
    });
    slide.addText('zkSync, Polygon zkEVM, Scroll', { x: 5.4, y: 3.2, w: 4, h: 0.25, fontSize: 10, color: gray, fontFace: 'Arial', italic: true });
    // Trade-off box
    slide.addText('핵심 트레이드오프', { x: 0.5, y: 3.7, w: 4, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.4, y: 4.05, w: 9.2, h: 0.7, fill: { color: 'FDEDEC' }, line: { color: red, width: 2 } });
    slide.addText('옵티미스틱: 비용 효율적이나 7일 확정 지연\nZK: 즉시 확정이나 높은 증명 비용', { x: 0.6, y: 4.15, w: 8.8, h: 0.5, fontSize: 12, color: navy, fontFace: 'Arial' });
    slide.addNotes(`[관련 연구 - 롤업 기술 비교]
계층 2 롤업은 크게 두 가지 방식으로 나뉩니다:

옵티미스틱 롤업:
- 사기 증명(Fraud Proof) 방식
- 트랜잭션이 유효하다고 "낙관적으로" 가정
- 분쟁 시 7일 이의 제기 기간 필요 (단점)
- 증명 비용이 낮음 (장점)
- EVM 호환성 높음 (장점)
- 대표: Arbitrum, Optimism, Base

ZK 롤업:
- 유효성 증명(Validity Proof) 방식
- 모든 트랜잭션에 대해 영지식 증명 생성
- 즉시 확정 가능 (장점)
- 증명 생성 비용이 높음 (단점)
- EVM 호환성 아직 개선 중
- 대표: zkSync, Polygon zkEVM, Scroll

핵심 트레이드오프:
옵티미스틱은 비용 효율적이지만 7일 확정 지연이 있고,
ZK는 즉시 확정되지만 증명 비용이 높습니다.`);

    // Slide 7: Related Work - State Channel
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('2. 관련 연구 - 상태 채널', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    // State Channel definition
    slide.addText('상태 채널 (State Channel)', { x: 0.5, y: 1.0, w: 5, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.35, w: 9, h: 0.9, fill: { color: 'E8F8F5' }, line: { color: teal, width: 2 }, rectRadius: 0.1 });
    slide.addText('블록체인 외부(오프체인)에서 참여자 간 상태 업데이트를 수행하고,\n최종 결과만 온체인에 기록하는 확장성 솔루션', { x: 0.6, y: 1.45, w: 8.8, h: 0.7, fontSize: 13, color: navy, fontFace: 'Arial' });
    // Characteristics
    slide.addText('핵심 특성', { x: 0.5, y: 2.4, w: 4, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    const scFeatures = [
        { title: '즉각적 확정', desc: '오프체인 합의로\n즉시 상태 확정' },
        { title: '최소 비용', desc: '중간 상태는\n온체인 기록 불필요' },
        { title: '높은 처리량', desc: '블록체인 병목 없이\n무제한 상호작용' },
        { title: '프라이버시', desc: '채널 내 거래는\n외부에 비공개' }
    ];
    scFeatures.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + idx * 2.35, y: 2.75, w: 2.2, h: 1.0, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.1 }, rectRadius: 0.1 });
        slide.addText(item.title, { x: 0.55 + idx * 2.35, y: 2.8, w: 2.1, h: 0.3, fontSize: 12, color: navy, fontFace: 'Arial', bold: true, align: 'center' });
        slide.addText(item.desc, { x: 0.55 + idx * 2.35, y: 3.1, w: 2.1, h: 0.55, fontSize: 10, color: gray, fontFace: 'Arial', align: 'center' });
    });
    // Application in this research
    slide.addText('본 연구에서의 활용', { x: 0.5, y: 3.95, w: 4, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.3, w: 9, h: 0.8, fill: { color: 'FEF9E7' }, line: { color: gold, width: 2 }, rectRadius: 0.1 });
    slide.addText('ZK 상태 채널 기반 분쟁 해결', { x: 0.6, y: 4.4, w: 8.8, h: 0.3, fontSize: 14, color: navy, fontFace: 'Arial', bold: true });
    slide.addText('분쟁 당사자 간 오프체인 이등분 탐색 수행 → 온체인 비용 최소화, 빠른 분쟁 해결', { x: 0.6, y: 4.7, w: 8.8, h: 0.3, fontSize: 12, color: gray, fontFace: 'Arial' });
    slide.addNotes(`[관련 연구 - 상태 채널]
상태 채널은 블록체인 확장성 솔루션의 하나입니다.

정의:
블록체인 외부(오프체인)에서 참여자 간 상태 업데이트를 수행하고,
최종 결과만 온체인에 기록하는 방식입니다.

핵심 특성:
1. 즉각적 확정: 오프체인에서 참여자 간 합의로 즉시 상태 확정
2. 최소 비용: 중간 상태는 온체인에 기록하지 않아 가스 비용 절감
3. 높은 처리량: 블록체인의 블록 생성 시간 제약 없이 무제한 상호작용
4. 프라이버시: 채널 내 거래 내역은 참여자만 알 수 있음

대표 사례:
- Lightning Network (비트코인)
- Raiden Network (이더리움)
- Celer Network

본 연구에서의 활용:
RVP 프로토콜은 ZK 상태 채널을 활용하여 분쟁을 해결합니다.
- 분쟁 당사자(Asserter, Challenger)가 오프체인 상태 채널 개설
- 채널 내에서 이등분 탐색 수행 (온체인 비용 없음)
- 분쟁 지점 확정 후 ZK 증명 생성
- 최종 결과만 온체인에 제출

이를 통해 온체인 분쟁 비용을 99.6% 절감합니다.`);

    // Slide 8: CBDC Overview
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('3. CBDC 시스템 - 개요', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.3, y: 0.2, w: 1.2, h: 0.4, fill: { color: teal }, rectRadius: 0.05 });
    slide.addText('논문 1', { x: 8.3, y: 0.25, w: 1.2, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    slide.addText('중앙은행 디지털 화폐 (CBDC)', { x: 0.5, y: 1.0, w: 5, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    slide.addText('중앙은행이 발행하는 디지털 형태의 법정화폐', { x: 0.5, y: 1.4, w: 9, h: 0.3, fontSize: 12, color: navy, fontFace: 'Arial' });
    slide.addText('기술적 요구사항', { x: 0.5, y: 1.9, w: 5, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    const reqs = ['높은 처리량', '낮은 거래 비용', '선형적 확장성', '프라이버시 보호', '규제 준수'];
    reqs.forEach((req, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + (idx % 3) * 3.1, y: 2.3 + Math.floor(idx / 3) * 0.5, w: 2.9, h: 0.4, fill: { color: 'FFFFFF' }, line: { color: teal, width: 1 } });
        slide.addText(req, { x: 0.6 + (idx % 3) * 3.1, y: 2.35 + Math.floor(idx / 3) * 0.5, w: 2.7, h: 0.3, fontSize: 11, color: navy, fontFace: 'Arial' });
    });
    slide.addText('제안 접근법', { x: 0.5, y: 3.4, w: 5, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.8, w: 9, h: 0.9, fill: { color: 'E8F8F5' }, rectRadius: 0.1 });
    slide.addText('옵티미스틱 롤업 기반 2계층 CBDC 아키텍처', { x: 0.6, y: 3.9, w: 8.8, h: 0.35, fontSize: 14, color: navy, fontFace: 'Arial', bold: true });
    slide.addText('중앙은행(L1) + 시중은행(L2) 구조로 실제 금융 시스템 반영', { x: 0.6, y: 4.3, w: 8.8, h: 0.3, fontSize: 12, color: gray, fontFace: 'Arial' });
    slide.addNotes(`[논문 1: CBDC 시스템 개요]
이제 첫 번째 연구인 CBDC 시스템에 대해 설명드리겠습니다.

CBDC(Central Bank Digital Currency)란 중앙은행이 발행하는 디지털 형태의 법정화폐입니다.

CBDC 시스템의 기술적 요구사항:
1. 높은 처리량 - 국가 단위 결제 시스템 지원
2. 낮은 거래 비용 - 소액 결제도 가능해야 함
3. 선형적 확장성 - 수요 증가에 대응
4. 프라이버시 보호 - 개인정보 보호
5. 규제 준수 - 금융 규제 요건 충족

제안 접근법:
옵티미스틱 롤업 기반 2계층 CBDC 아키텍처를 설계했습니다.
- L1(Layer 1): 중앙은행 - 최종 정산, 통화 정책
- L2(Layer 2): 시중은행 - 실제 거래 처리
이 구조는 실제 금융 시스템의 계층 구조를 자연스럽게 반영합니다.`);

    // Slide 8: CBDC Architecture
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('3. CBDC 시스템 - 아키텍처', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.3, y: 0.2, w: 1.2, h: 0.4, fill: { color: teal }, rectRadius: 0.05 });
    slide.addText('논문 1', { x: 8.3, y: 0.25, w: 1.2, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    // Add architecture diagram image
    slide.addImage({ path: path.join(__dirname, 'images/cbdc_p6_img2.jpeg'), x: 0.3, y: 0.95, w: 9.4, h: 3.5 });
    slide.addText('L1↔L2 CBDC 입금 플로우 (Wallet → L1 → DTL → L2 → BS)', { x: 0.5, y: 4.55, w: 9, h: 0.3, fontSize: 11, color: gray, fontFace: 'Arial', align: 'center', italic: true });
    slide.addNotes(`[CBDC 아키텍처 다이어그램 설명]
이 다이어그램은 CBDC 시스템의 입금 플로우를 보여줍니다.

주요 컴포넌트:
- Wallet: 사용자 지갑
- L1 (Ethereum): 중앙은행 역할, 최종 정산
- DTL (Data Transport Layer): 계층 간 데이터 전송
- L2 (Optimistic Rollup): 시중은행 역할, 실제 거래 처리
- BS (Block Synchronizer): 블록 동기화

플로우:
1. 사용자가 L1에 CBDC 입금 요청
2. L1에서 토큰 락업(Lock)
3. DTL을 통해 L2로 메시지 전달
4. L2에서 동일 금액의 CBDC 발행
5. 사용자가 L2에서 빠르게 거래 가능

이 구조의 장점은 L2에서 빠른 거래가 가능하면서도
L1의 보안성을 상속받는다는 점입니다.`);

    // Slide 9: CBDC Results
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('3. CBDC 시스템 - 실험 결과', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.3, y: 0.2, w: 1.2, h: 0.4, fill: { color: teal }, rectRadius: 0.05 });
    slide.addText('논문 1', { x: 8.3, y: 0.25, w: 1.2, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    // Results summary boxes (top row)
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 4.3, h: 1.5, fill: { color: 'E8F8F5' }, line: { color: green, width: 2 }, rectRadius: 0.1 });
    slide.addText('선형 확장성 달성', { x: 0.6, y: 1.1, w: 4.1, h: 0.35, fontSize: 16, color: green, fontFace: 'Arial', bold: true });
    slide.addText('L2 노드 수에 따른 TPS:', { x: 0.6, y: 1.5, w: 4.1, h: 0.25, fontSize: 11, color: navy, fontFace: 'Arial' });
    slide.addText('• 1개 노드: 698 TPS\n• 5개 노드: 3,484 TPS\n• 10개 노드: 6,989 TPS\n• 15개 노드: 10,483 TPS (15.02x 확장)', { x: 0.6, y: 1.75, w: 4.1, h: 0.7, fontSize: 10, color: gray, fontFace: 'Arial' });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 5.2, y: 1.0, w: 4.3, h: 1.5, fill: { color: 'FDEDEC' }, line: { color: red, width: 2 }, rectRadius: 0.1 });
    slide.addText('적용 한계', { x: 5.3, y: 1.1, w: 4.1, h: 0.35, fontSize: 16, color: red, fontFace: 'Arial', bold: true });
    slide.addText('7일 확정 지연', { x: 5.3, y: 1.5, w: 4.1, h: 0.3, fontSize: 14, color: red, fontFace: 'Arial', bold: true });
    slide.addText('• 금융 서비스에서 즉시 결제 불가\n• 실시간 거래 요구사항 미충족\n• 분쟁 발생 시 7일 대기 필수', { x: 5.3, y: 1.8, w: 4.1, h: 0.6, fontSize: 10, color: navy, fontFace: 'Arial' });
    // Add Cross-L2 transfer diagram (larger)
    slide.addText('크로스-L2 CBDC 전송 플로우', { x: 0.5, y: 2.65, w: 9, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    slide.addImage({ path: path.join(__dirname, 'images/cbdc_p8_img1.jpeg'), x: 0.3, y: 3.0, w: 9.4, h: 2.0 });
    slide.addNotes(`[CBDC 실험 결과]
CBDC 시스템의 확장성 실험 결과를 보여드리겠습니다.

TPS(Transactions Per Second) 차트:
- L2 노드 1개: 698 TPS
- L2 노드 5개: 3,484 TPS
- L2 노드 10개: 6,989 TPS
- L2 노드 15개: 10,483 TPS

핵심 성과:
노드 수에 비례하여 거의 완벽한 선형 확장성(15.02배)을 달성했습니다.
이는 국가 단위 결제 시스템에 적용 가능한 수준입니다.

크로스-L2 전송:
다이어그램은 서로 다른 L2(시중은행) 간의 CBDC 전송 플로우를 보여줍니다.
L1을 경유하여 안전한 크로스-체인 전송이 가능합니다.

적용 한계:
그러나 여전히 7일 확정 지연 문제가 존재합니다.
금융 서비스에서 즉시 결제가 불가능하고,
실시간 거래 요구사항을 충족하지 못합니다.
→ 이것이 논문 3에서 해결하고자 하는 핵심 문제입니다.`);

    // Slide 10: Storage Overview
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('4. 분산 스토리지 - 개요', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.3, y: 0.2, w: 1.2, h: 0.4, fill: { color: gold }, rectRadius: 0.05 });
    slide.addText('논문 2', { x: 8.3, y: 0.25, w: 1.2, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    slide.addText('블록체인 기반 분산 스토리지의 문제점', { x: 0.5, y: 1.0, w: 6, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 1.3, fill: { color: 'FDEDEC' }, line: { color: red, width: 2 }, rectRadius: 0.1 });
    slide.addText('기존 IPFS-이더리움 통합 시스템', { x: 0.6, y: 1.5, w: 8.8, h: 0.35, fontSize: 14, color: red, fontFace: 'Arial', bold: true });
    slide.addText([
        { text: '• 파일당 개별 온체인 거래 필요\n', options: { bullet: false } },
        { text: '• 1000 파일 저장 시 약 $2,847 가스 비용\n', options: { bullet: false } },
        { text: '• 네트워크 혼잡 시 심각한 처리 지연', options: { bullet: false } }
    ], { x: 0.6, y: 1.9, w: 8.8, h: 0.7, fontSize: 12, color: navy, fontFace: 'Arial' });
    slide.addText('제안 접근법', { x: 0.5, y: 3.0, w: 5, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.4, w: 9, h: 1, fill: { color: 'E8F8F5' }, line: { color: teal, width: 2 }, rectRadius: 0.1 });
    slide.addText('옵티미스틱 롤업 중간 계층 도입', { x: 0.6, y: 3.5, w: 8.8, h: 0.35, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    slide.addText('IPFS + 옵티미스틱 롤업(L2) + 이더리움(L1) 3계층 구조\n파일 메타데이터 배치 처리로 거래 수 대폭 감소', { x: 0.6, y: 3.9, w: 8.8, h: 0.45, fontSize: 12, color: navy, fontFace: 'Arial' });
    slide.addNotes(`[논문 2: 분산 스토리지 개요]
두 번째 연구인 분산 스토리지 시스템에 대해 설명드리겠습니다.

기존 IPFS-이더리움 통합 시스템의 문제점:
1. 파일당 개별 온체인 거래 필요 → 트랜잭션 비용 급증
2. 1000개 파일 저장 시 약 $2,847의 가스 비용 발생
3. 네트워크 혼잡 시 심각한 처리 지연

제안 접근법:
옵티미스틱 롤업을 중간 계층으로 도입한 3계층 구조:
- 저장 계층: IPFS (실제 파일 저장)
- 처리 계층: 옵티미스틱 롤업 (메타데이터 배치 처리)
- 정산 계층: 이더리움 (최종 상태 기록)

핵심 아이디어:
파일 메타데이터를 배치로 묶어서 처리함으로써
온체인 거래 수를 대폭 감소시킵니다.`);

    // Slide 11: Storage Architecture
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('4. 분산 스토리지 - 아키텍처', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.3, y: 0.2, w: 1.2, h: 0.4, fill: { color: gold }, rectRadius: 0.05 });
    slide.addText('논문 2', { x: 8.3, y: 0.25, w: 1.2, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    // Add storage sequence diagram image
    slide.addImage({ path: path.join(__dirname, 'images/storage_p9_img1.jpeg'), x: 0.2, y: 0.9, w: 9.6, h: 3.8 });
    slide.addText('분산 스토리지 시퀀스 다이어그램: Data Owner/User ↔ Contracts ↔ L2 ↔ IPFS ↔ Ethereum', { x: 0.3, y: 4.75, w: 9.4, h: 0.3, fontSize: 10, color: gray, fontFace: 'Arial', align: 'center', italic: true });
    slide.addNotes(`[분산 스토리지 아키텍처 다이어그램 설명]
이 시퀀스 다이어그램은 분산 스토리지 시스템의 동작 흐름을 보여줍니다.

주요 참여자:
- Data Owner: 파일 소유자
- User: 파일 사용자
- Contracts: 스마트 컨트랙트 (접근 제어, 결제)
- L2: 옵티미스틱 롤업 (배치 처리)
- IPFS: 분산 파일 저장소
- Ethereum: 최종 상태 기록

파일 업로드 플로우:
1. Data Owner가 파일을 IPFS에 업로드
2. IPFS 해시(CID)를 L2의 컨트랙트에 등록
3. L2에서 배치로 묶어서 처리
4. 최종 상태를 Ethereum에 기록

파일 접근 플로우:
1. User가 접근 권한 요청
2. 컨트랙트에서 권한 확인
3. 승인 시 IPFS에서 파일 다운로드

이 구조의 장점은 개별 파일마다 온체인 거래가 필요 없다는 것입니다.`);

    // Slide 12: Storage Results
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('4. 분산 스토리지 - 실험 결과', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.3, y: 0.2, w: 1.2, h: 0.4, fill: { color: gold }, rectRadius: 0.05 });
    slide.addText('논문 2', { x: 8.3, y: 0.25, w: 1.2, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    // Result cards
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 4.3, h: 1.4, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.15 }, rectRadius: 0.1 });
    slide.addText('비용 절감률', { x: 0.6, y: 1.1, w: 4.1, h: 0.3, fontSize: 12, color: gray, fontFace: 'Arial', align: 'center' });
    slide.addText('99.99%', { x: 0.6, y: 1.45, w: 4.1, h: 0.6, fontSize: 32, color: green, fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('$2,847 → $0.28 (1000 파일)', { x: 0.6, y: 2.05, w: 4.1, h: 0.25, fontSize: 11, color: navy, fontFace: 'Arial', align: 'center' });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 5.2, y: 1.0, w: 4.3, h: 1.4, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.15 }, rectRadius: 0.1 });
    slide.addText('처리 시간 개선', { x: 5.3, y: 1.1, w: 4.1, h: 0.3, fontSize: 12, color: gray, fontFace: 'Arial', align: 'center' });
    slide.addText('99.4%', { x: 5.3, y: 1.45, w: 4.1, h: 0.6, fontSize: 32, color: green, fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('4.6시간 → 1.7분 (1000 파일)', { x: 5.3, y: 2.05, w: 4.1, h: 0.25, fontSize: 11, color: navy, fontFace: 'Arial', align: 'center' });
    // Comparison table
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 2.6, w: 9, h: 1.2, fill: { color: 'FFFFFF' }, rectRadius: 0.1 });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 2.6, w: 9, h: 0.35, fill: { color: 'F4F6F6' } });
    slide.addText('항목', { x: 0.6, y: 2.65, w: 3, h: 0.25, fontSize: 11, color: gray, fontFace: 'Arial' });
    slide.addText('메인넷 직접', { x: 3.6, y: 2.65, w: 2.5, h: 0.25, fontSize: 11, color: red, fontFace: 'Arial', align: 'center' });
    slide.addText('롤업 적용', { x: 6.6, y: 2.65, w: 2.5, h: 0.25, fontSize: 11, color: green, fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('평균 거래 비용', { x: 0.6, y: 3.05, w: 3, h: 0.25, fontSize: 11, color: navy, fontFace: 'Arial' });
    slide.addText('$2.85/건', { x: 3.6, y: 3.05, w: 2.5, h: 0.25, fontSize: 11, color: red, fontFace: 'Arial', align: 'center' });
    slide.addText('$0.00028/건', { x: 6.6, y: 3.05, w: 2.5, h: 0.25, fontSize: 11, color: green, fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('평균 처리 시간', { x: 0.6, y: 3.4, w: 3, h: 0.25, fontSize: 11, color: navy, fontFace: 'Arial' });
    slide.addText('16.5초/건', { x: 3.6, y: 3.4, w: 2.5, h: 0.25, fontSize: 11, color: red, fontFace: 'Arial', align: 'center' });
    slide.addText('0.1초/건', { x: 6.6, y: 3.4, w: 2.5, h: 0.25, fontSize: 11, color: green, fontFace: 'Arial', align: 'center', bold: true });
    // Limitation
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.0, w: 9, h: 0.5, fill: { color: 'FDEDEC' }, line: { color: red, width: 2 } });
    slide.addText('적용 한계: 7일 확정 지연 - 파일 소유권 이전, 삭제 요청의 즉각적 상태 변경 불가', { x: 0.6, y: 4.1, w: 8.8, h: 0.3, fontSize: 12, color: navy, fontFace: 'Arial' });
    slide.addNotes(`[분산 스토리지 실험 결과]
분산 스토리지 시스템의 실험 결과입니다.

비용 절감:
- 기존: 1000 파일 저장 시 $2,847
- 제안: 1000 파일 저장 시 $0.28
- 절감율: 99.99%

처리 시간 개선:
- 기존: 1000 파일 처리에 4.6시간
- 제안: 1000 파일 처리에 1.7분
- 개선율: 99.4%

비교표 설명:
- 평균 거래 비용: $2.85/건 → $0.00028/건
- 평균 처리 시간: 16.5초/건 → 0.1초/건

적용 한계:
여전히 7일 확정 지연 문제가 있습니다.
파일 소유권 이전, 삭제 요청 등의 즉각적 상태 변경이 불가능합니다.
예를 들어, 파일 삭제를 요청해도 7일 후에야 확정됩니다.

이것이 논문 1과 공통되는 한계점입니다.`);

    // Slide 13: Problem Statement (Transition)
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: navy } });
    slide.addText('논문 1, 2의 공통 한계', { x: 0.5, y: 1.3, w: 9, h: 0.6, fontSize: 28, color: 'FFFFFF', fontFace: 'Arial', bold: true, align: 'center' });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 2, y: 2.1, w: 6, h: 0.8, fill: { color: red }, rectRadius: 0.1 });
    slide.addText('분쟁 발생 시 7일 확정 지연', { x: 2.1, y: 2.25, w: 5.8, h: 0.5, fontSize: 20, color: 'FFFFFF', fontFace: 'Arial', bold: true, align: 'center' });
    // Summary boxes
    slide.addShape(pptx.shapes.RECTANGLE, { x: 1.5, y: 3.2, w: 3.2, h: 1.1, fill: { color: '2E4053' }, rectRadius: 0.1 });
    slide.addText('CBDC 시스템', { x: 1.6, y: 3.3, w: 3, h: 0.3, fontSize: 12, color: teal, fontFace: 'Arial', align: 'center' });
    slide.addText('10,483 TPS 달성', { x: 1.6, y: 3.65, w: 3, h: 0.25, fontSize: 14, color: green, fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('But 7일 대기', { x: 1.6, y: 3.95, w: 3, h: 0.25, fontSize: 14, color: red, fontFace: 'Arial', align: 'center', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 5.3, y: 3.2, w: 3.2, h: 1.1, fill: { color: '2E4053' }, rectRadius: 0.1 });
    slide.addText('분산 스토리지', { x: 5.4, y: 3.3, w: 3, h: 0.3, fontSize: 12, color: teal, fontFace: 'Arial', align: 'center' });
    slide.addText('99.99% 비용 절감', { x: 5.4, y: 3.65, w: 3, h: 0.25, fontSize: 14, color: green, fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('But 7일 대기', { x: 5.4, y: 3.95, w: 3, h: 0.25, fontSize: 14, color: red, fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('→ 이 문제를 해결하는 것이 논문 3의 핵심 기여', { x: 0.5, y: 4.6, w: 9, h: 0.4, fontSize: 16, color: gold, fontFace: 'Arial', bold: true, align: 'center' });
    slide.addNotes(`[전환 슬라이드 - 핵심 문제 강조]
지금까지 발표한 논문 1, 2의 공통 한계를 정리하겠습니다.

논문 1 (CBDC 시스템):
- 성과: 선형 확장성으로 10,483 TPS 달성
- 한계: 분쟁 발생 시 7일 확정 지연

논문 2 (분산 스토리지):
- 성과: 99.99% 비용 절감
- 한계: 분쟁 발생 시 7일 확정 지연

두 시스템 모두 옵티미스틱 롤업의 이점을 누리지만,
"7일 확정 지연"이라는 공통된 한계점이 있습니다.

[강조]
이 문제를 해결하는 것이 바로 논문 3의 핵심 기여입니다.
다음 슬라이드부터 논문 3의 하이브리드 프로토콜을 설명드리겠습니다.

이것이 본 학위논문의 가장 중요한 학술적 기여입니다.`);

    // Slide 14: RVP Paradigm
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('5. RVP 패러다임 - 시스템 아키텍처', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.1, y: 0.2, w: 1.4, h: 0.4, fill: { color: red }, rectRadius: 0.05 });
    slide.addText('핵심 기여', { x: 8.1, y: 0.25, w: 1.4, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    // Add ZK State Channel architecture diagram
    slide.addImage({ path: path.join(__dirname, 'images/zk_p5_img1.jpeg'), x: 0.2, y: 0.9, w: 9.6, h: 3.6 });
    // Core idea
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: 9, h: 0.45, fill: { color: navy }, rectRadius: 0.1 });
    slide.addText('Layer 1 (Ethereum) + Off-chain ZK State Channel + Prover Network', { x: 0.6, y: 4.68, w: 8.8, h: 0.3, fontSize: 13, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    slide.addNotes(`[논문 3: RVP 패러다임 - 시스템 아키텍처]
이제 본 논문의 핵심 기여인 RVP(Reactive Validity Proof) 패러다임을 설명드리겠습니다.

RVP 패러다임의 핵심 아이디어:
- 평상시: 옵티미스틱 방식으로 비용 효율적 운영
- 분쟁 시: ZK 증명으로 빠른 확정

시스템 아키텍처 (다이어그램 설명):
1. Layer 1 (Ethereum): 최종 정산 및 분쟁 판정
2. Off-chain ZK State Channel: 분쟁 당사자 간 오프체인 협상
3. Prover Network: 필요 시 ZK 증명 생성

주요 컴포넌트:
- Optimistic Rollup: 기존 옵티미스틱 롤업 시스템
- ZK State Channel Contract: 상태 채널 관리
- Dispute Resolution Contract: 분쟁 판정
- Prover Network: 분산 증명자 네트워크

장점:
- 기존 옵티미스틱 롤업과 완전 호환
- 분쟁 시에만 추가 비용 발생
- 7일 → 1~2시간으로 확정 시간 단축`);

    // Slide 15: Bisection Protocol
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('5. 오프체인 이등분 탐색 프로토콜', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.1, y: 0.2, w: 1.4, h: 0.4, fill: { color: red }, rectRadius: 0.05 });
    slide.addText('핵심 기여', { x: 8.1, y: 0.25, w: 1.4, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    // Add bisection protocol flow diagram
    slide.addImage({ path: path.join(__dirname, 'images/zk_p6_img1.jpeg'), x: 0.2, y: 0.9, w: 9.6, h: 3.5 });
    // Summary metrics
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.55, fill: { color: navy }, rectRadius: 0.1 });
    slide.addText('73 라운드 × 2 메시지 = 146 메시지 | 29.2 KB 데이터 | ~7초 (50ms 지연시) | ZK 증명: 8-10B gates, 30-50초', { x: 0.6, y: 4.58, w: 8.8, h: 0.4, fontSize: 11, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    slide.addNotes(`[오프체인 이등분 탐색 프로토콜]
분쟁 해결의 첫 번째 단계인 이등분 탐색 프로토콜입니다.

다이어그램 설명:
분쟁이 발생하면 오프체인에서 Asserter와 Challenger가
상태 채널을 통해 이등분 탐색(Binary Search)을 수행합니다.

프로토콜 동작:
1. Asserter가 상태 루트 제출
2. Challenger가 이의 제기
3. 상태 채널에서 이등분 탐색 시작
4. 각 라운드에서 탐색 범위를 절반으로 축소
5. 최종적으로 단일 EVM 명령어까지 좁혀짐

성능 지표:
- 총 라운드: 73 (log₂(2^73) EVM 스텝 커버)
- 메시지 수: 146개 (라운드당 2개)
- 데이터량: 29.2 KB
- 소요 시간: 약 7초 (50ms 네트워크 지연 기준)
- ZK 증명: 8-10 billion gates, 30-50초

이 프로토콜의 핵심은 온체인 비용 없이 분쟁 지점을 정확히 찾는 것입니다.`);

    // Slide 16: On-demand ZK Proof
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('5. 온디맨드 유효성 증명', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.1, y: 0.2, w: 1.4, h: 0.4, fill: { color: red }, rectRadius: 0.05 });
    slide.addText('핵심 기여', { x: 8.1, y: 0.25, w: 1.4, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    // Key insight
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 9, h: 0.7, fill: { color: 'FEF9E7' }, line: { color: gold, width: 2 }, rectRadius: 0.1 });
    slide.addText('핵심 아이디어: 단일 명령어만 증명', { x: 0.6, y: 1.1, w: 8.8, h: 0.3, fontSize: 14, color: navy, fontFace: 'Arial', bold: true });
    slide.addText('전체 배치가 아닌, 분쟁 지점의 단일 EVM 명령어에 대해서만 ZK 증명 생성', { x: 0.6, y: 1.4, w: 8.8, h: 0.25, fontSize: 12, color: gray, fontFace: 'Arial' });
    // Process
    slide.addText('증명 생성 프로세스', { x: 0.5, y: 1.9, w: 9, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    const process = [
        { num: '1', title: '입력 준비', desc: '분쟁 지점 명령어\n전/후 상태' },
        { num: '2', title: 'ZK 증명 생성', desc: 'ZK-EVM 회로\n단일 명령어 증명' },
        { num: '3', title: '온체인 제출', desc: '검증 컨트랙트\n증명 검증' },
        { num: '4', title: '판정', desc: '정직한 당사자\n승리 선언' }
    ];
    process.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + idx * 2.35, y: 2.25, w: 2.2, h: 1.3, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.1 }, rectRadius: 0.1 });
        slide.addShape(pptx.shapes.OVAL, { x: 1.3 + idx * 2.35, y: 2.35, w: 0.4, h: 0.4, fill: { color: teal } });
        slide.addText(item.num, { x: 1.3 + idx * 2.35, y: 2.38, w: 0.4, h: 0.35, fontSize: 14, color: 'FFFFFF', fontFace: 'Arial', align: 'center', bold: true });
        slide.addText(item.title, { x: 0.6 + idx * 2.35, y: 2.8, w: 2, h: 0.3, fontSize: 12, color: navy, fontFace: 'Arial', align: 'center', bold: true });
        slide.addText(item.desc, { x: 0.6 + idx * 2.35, y: 3.1, w: 2, h: 0.4, fontSize: 10, color: gray, fontFace: 'Arial', align: 'center' });
    });
    // Benefits
    slide.addText('장점', { x: 0.5, y: 3.75, w: 9, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    const zkBenefits = [
        { title: '증명 크기 최소화', desc: '전체 배치 대비 극소량' },
        { title: '생성 시간 단축', desc: '단일 명령어로 빠른 생성' },
        { title: '비용 효율성', desc: '분쟁 시에만 비용 발생' }
    ];
    zkBenefits.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + idx * 3.1, y: 4.1, w: 2.9, h: 0.75, fill: { color: 'E8F8F5' }, rectRadius: 0.1 });
        slide.addText(item.title, { x: 0.6 + idx * 3.1, y: 4.15, w: 2.7, h: 0.3, fontSize: 13, color: green, fontFace: 'Arial', bold: true, align: 'center' });
        slide.addText(item.desc, { x: 0.6 + idx * 3.1, y: 4.45, w: 2.7, h: 0.3, fontSize: 11, color: navy, fontFace: 'Arial', align: 'center' });
    });
    slide.addNotes(`[온디맨드 유효성 증명]
이등분 탐색으로 분쟁 지점을 찾은 후, ZK 증명을 생성합니다.

핵심 아이디어:
전체 배치가 아닌, 분쟁 지점의 "단일 EVM 명령어"에 대해서만 ZK 증명을 생성합니다.

증명 생성 프로세스:
1. 입력 준비: 분쟁 지점 명령어와 전/후 상태
2. ZK 증명 생성: ZK-EVM 회로로 단일 명령어 증명
3. 온체인 제출: 검증 컨트랙트에 증명 제출
4. 판정: 정직한 당사자 승리 선언

장점:
1. 증명 크기 최소화
   - 전체 배치 증명 대비 극소량

2. 생성 시간 단축
   - 단일 명령어만 증명하므로 빠름

3. 비용 효율성
   - 분쟁 시에만 증명 비용 발생
   - 정상 운영 시 추가 비용 없음

이것이 "온디맨드(On-demand)"의 핵심입니다.
항상 증명하는 것이 아니라 필요할 때만 증명합니다.`);

    // Slide 17: Paper 3 Results
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('5. 실험 결과 - 비용 비교', { x: 0.5, y: 0.2, w: 7, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 8.1, y: 0.2, w: 1.4, h: 0.4, fill: { color: red }, rectRadius: 0.05 });
    slide.addText('핵심 기여', { x: 8.1, y: 0.25, w: 1.4, h: 0.3, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    // Add cost comparison chart image (reduced height)
    slide.addImage({ path: path.join(__dirname, 'images/zk_p8_img1.jpeg'), x: 0.2, y: 0.9, w: 9.6, h: 2.8 });
    // Comparison table below the chart
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.8, w: 9, h: 1.2, fill: { color: 'FFFFFF' }, line: { color: teal, width: 1 }, rectRadius: 0.05 });
    // Table header
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.8, w: 9, h: 0.3, fill: { color: navy } });
    slide.addText('항목', { x: 0.6, y: 3.83, w: 2.3, h: 0.25, fontSize: 10, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addText('옵티미스틱', { x: 2.9, y: 3.83, w: 2, h: 0.25, fontSize: 10, color: 'FFFFFF', fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('ZK 롤업', { x: 4.9, y: 3.83, w: 2, h: 0.25, fontSize: 10, color: 'FFFFFF', fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('제안 방식', { x: 6.9, y: 3.83, w: 2.5, h: 0.25, fontSize: 10, color: gold, fontFace: 'Arial', align: 'center', bold: true });
    // Table rows
    const compareRows = [
        { label: '정상 시 비용', opt: { v: '낮음', c: green }, zk: { v: '높음', c: red }, prop: { v: '낮음', c: green } },
        { label: '분쟁 시 비용', opt: { v: '높음', c: red }, zk: { v: '낮음', c: green }, prop: { v: '낮음', c: green } },
        { label: '확정 시간', opt: { v: '7일', c: red }, zk: { v: '즉시', c: green }, prop: { v: '1~2시간', c: green } }
    ];
    compareRows.forEach((row, idx) => {
        const y = 4.15 + idx * 0.28;
        slide.addText(row.label, { x: 0.6, y: y, w: 2.3, h: 0.25, fontSize: 10, color: navy, fontFace: 'Arial' });
        slide.addText(row.opt.v, { x: 2.9, y: y, w: 2, h: 0.25, fontSize: 10, color: row.opt.c, fontFace: 'Arial', align: 'center' });
        slide.addText(row.zk.v, { x: 4.9, y: y, w: 2, h: 0.25, fontSize: 10, color: row.zk.c, fontFace: 'Arial', align: 'center' });
        slide.addText(row.prop.v, { x: 6.9, y: y, w: 2.5, h: 0.25, fontSize: 10, color: row.prop.c, fontFace: 'Arial', align: 'center', bold: true });
    });
    // Summary text at bottom
    slide.addText('98.4% 비용 절감 (30 Gwei 기준: $3,942 → $61.34) | 208배 페널티 팩터로 공격 억제', { x: 0.5, y: 5.05, w: 9, h: 0.25, fontSize: 11, color: navy, fontFace: 'Arial', align: 'center', bold: true });
    slide.addNotes(`[실험 결과 - 비용 비교]
하이브리드 프로토콜의 실험 결과입니다.

차트 설명 (가스 비용 비교):
- 기존 옵티미스틱: 분쟁 시 약 5M 가스
- 제안 프로토콜: 분쟁 시 약 20K 가스
- 절감율: 99.6%

금액 환산 (30 Gwei 기준):
- 기존: $3,942
- 제안: $61.34
- 절감율: 98.4%

비교표 설명:
               옵티미스틱  ZK롤업    제안방식
정상 시 비용    낮음       높음      낮음
분쟁 시 비용    높음       낮음      낮음
확정 시간       7일        즉시      1~2시간
EVM 호환성     높음       중간      높음

제안 방식의 장점:
- 옵티미스틱의 비용 효율성 유지
- ZK의 빠른 확정 이점 획득
- 높은 EVM 호환성 유지

208배 페널티 팩터:
악의적 공격자는 208배의 페널티를 부담하므로
경제적으로 공격이 비합리적입니다.`);

    // Slide 18: Integration
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('5. 논문 1, 2 시스템에의 적용', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    slide.addText('하이브리드 프로토콜 통합 효과', { x: 0.5, y: 1.0, w: 9, h: 0.3, fontSize: 16, color: teal, fontFace: 'Arial', bold: true });
    // Integration cards
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.4, w: 4.3, h: 1.8, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.15 }, rectRadius: 0.1 });
    slide.addText('CBDC 시스템 (논문 1)', { x: 0.6, y: 1.5, w: 4.1, h: 0.35, fontSize: 14, color: navy, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.6, y: 1.85, w: 4.1, h: 0.01, fill: { color: teal } });
    slide.addText('Before: 7일 확정 지연  →  After: 1~2시간', { x: 0.6, y: 1.95, w: 4.1, h: 0.3, fontSize: 11, color: navy, fontFace: 'Arial' });
    slide.addText('• 실시간에 가까운 금융 거래 확정\n• 기존 2계층 아키텍처 그대로 유지\n• 금융 규제 요건 충족 가능', { x: 0.6, y: 2.3, w: 4.1, h: 0.8, fontSize: 10, color: gray, fontFace: 'Arial' });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 5.2, y: 1.4, w: 4.3, h: 1.8, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.15 }, rectRadius: 0.1 });
    slide.addText('분산 스토리지 (논문 2)', { x: 5.3, y: 1.5, w: 4.1, h: 0.35, fontSize: 14, color: navy, fontFace: 'Arial', bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 5.3, y: 1.85, w: 4.1, h: 0.01, fill: { color: teal } });
    slide.addText('Before: 7일 확정 지연  →  After: 1~2시간', { x: 5.3, y: 1.95, w: 4.1, h: 0.3, fontSize: 11, color: navy, fontFace: 'Arial' });
    slide.addText('• 파일 소유권 이전/삭제의 신속한 확정\n• 99.99% 비용 절감 효과 유지\n• 사용자 경험 대폭 개선', { x: 5.3, y: 2.3, w: 4.1, h: 0.8, fontSize: 10, color: gray, fontFace: 'Arial' });
    // Summary
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.5, w: 9, h: 1.0, fill: { color: 'E8F8F5' }, line: { color: green, width: 2 }, rectRadius: 0.1 });
    slide.addText('통합 솔루션 완성', { x: 0.6, y: 3.6, w: 8.8, h: 0.3, fontSize: 14, color: green, fontFace: 'Arial', bold: true });
    slide.addText('논문 1, 2에서 제기된 분쟁 해결 지연 문제가 논문 3의 하이브리드 프로토콜로 해결되어,\n옵티미스틱 롤업의 장점을 온전히 활용할 수 있는 완전한 계층 2 솔루션이 구축됨', { x: 0.6, y: 3.95, w: 8.8, h: 0.5, fontSize: 12, color: navy, fontFace: 'Arial' });
    slide.addNotes(`[논문 1, 2 시스템에의 적용]
하이브리드 프로토콜을 논문 1, 2 시스템에 적용한 효과입니다.

CBDC 시스템 (논문 1) 적용:
- Before: 7일 확정 지연
- After: 1~2시간 확정
- 효과:
  · 실시간에 가까운 금융 거래 확정
  · 기존 2계층 아키텍처 그대로 유지
  · 금융 규제 요건 충족 가능

분산 스토리지 (논문 2) 적용:
- Before: 7일 확정 지연
- After: 1~2시간 확정
- 효과:
  · 파일 소유권 이전/삭제의 신속한 확정
  · 99.99% 비용 절감 효과 유지
  · 사용자 경험 대폭 개선

통합 솔루션 완성:
논문 1, 2에서 제기된 7일 분쟁 해결 지연 문제가
논문 3의 하이브리드 프로토콜로 해결되었습니다.

이제 옵티미스틱 롤업의 장점을 온전히 활용할 수 있는
완전한 계층 2 솔루션이 구축되었습니다.`);

    // Slide 19: Academic Contribution
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('6. 학문적 기여', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    // Contribution cards
    const acadContribs = [
        { icon: 'T', title: '이론적 기여', desc: 'RVP 패러다임 제안\n옵티미스틱과 ZK의 장점을\n상황에 따라 적응적으로 결합' },
        { icon: 'P', title: '프로토콜 설계', desc: '오프체인 이등분 + 온디맨드 ZK\n분쟁 해결 가스 99.6% 절감\n확정 시간 7일→1~2시간' },
        { icon: 'E', title: '실증적 기여', desc: '2개 도메인 검증\nCBDC, 분산 스토리지에서\n적용 가능성 및 성능 실증' }
    ];
    acadContribs.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + idx * 3.1, y: 1.0, w: 2.9, h: 1.9, fill: { color: 'FFFFFF' }, shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.15 }, rectRadius: 0.1 });
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + idx * 3.1, y: 1.0, w: 2.9, h: 0.05, fill: { color: teal } });
        slide.addShape(pptx.shapes.OVAL, { x: 0.7 + idx * 3.1, y: 1.15, w: 0.45, h: 0.45, fill: { color: teal } });
        slide.addText(item.icon, { x: 0.7 + idx * 3.1, y: 1.18, w: 0.45, h: 0.4, fontSize: 16, color: 'FFFFFF', fontFace: 'Arial', align: 'center', bold: true });
        slide.addText(item.title, { x: 1.25 + idx * 3.1, y: 1.2, w: 2, h: 0.35, fontSize: 14, color: navy, fontFace: 'Arial', bold: true });
        slide.addText(item.desc, { x: 0.6 + idx * 3.1, y: 1.7, w: 2.7, h: 1.1, fontSize: 10, color: gray, fontFace: 'Arial' });
    });
    // Paper summary
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.4, fill: { color: navy }, rectRadius: 0.1 });
    const paperSummary = [
        { badge: '논문 1', desc: '옵티미스틱 롤업 기반 CBDC 시스템', status: '출판 완료' },
        { badge: '논문 2', desc: '옵티미스틱 롤업 기반 분산 스토리지', status: '출판 확정' },
        { badge: '논문 3', desc: 'ZK 상태 채널 기반 하이브리드 분쟁 프로토콜', status: '초안 완성' }
    ];
    paperSummary.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.7, y: 3.25 + idx * 0.4, w: 0.8, h: 0.3, fill: { color: teal }, rectRadius: 0.05 });
        slide.addText(item.badge, { x: 0.7, y: 3.27 + idx * 0.4, w: 0.8, h: 0.25, fontSize: 10, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
        slide.addText(item.desc, { x: 1.6, y: 3.25 + idx * 0.4, w: 5.5, h: 0.3, fontSize: 11, color: 'FFFFFF', fontFace: 'Arial' });
        slide.addText(item.status, { x: 7.2, y: 3.25 + idx * 0.4, w: 2, h: 0.3, fontSize: 10, color: gold, fontFace: 'Arial' });
    });
    slide.addNotes(`[학문적 기여 요약]
본 연구의 학문적 기여를 정리하겠습니다.

이론적 기여 (T):
- RVP(Reactive Validity Proof) 패러다임 제안
- 옵티미스틱과 ZK의 장점을 상황에 따라 적응적으로 결합
- 평상시 옵티미스틱, 분쟁시 ZK라는 새로운 패러다임

프로토콜 설계 (P):
- 오프체인 이등분 탐색 + 온디맨드 ZK 증명
- 분쟁 해결 가스 비용 99.6% 절감
- 확정 시간 7일 → 1~2시간으로 단축

실증적 기여 (E):
- 2개 도메인에서 검증
  · CBDC: 금융 시스템
  · 분산 스토리지: 데이터 관리 시스템
- 적용 가능성 및 성능 실증

연구 논문 구성:
- 논문 1: CBDC 시스템 (출판 완료)
- 논문 2: 분산 스토리지 (출판 확정)
- 논문 3: 하이브리드 분쟁 프로토콜 (초안 완성)`);

    // Slide 20: Future Work
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: navy } });
    slide.addText('6. 연구의 한계 및 향후 연구', { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, color: 'FFFFFF', fontFace: 'Arial', bold: true });
    // Limitations
    slide.addText('연구의 한계', { x: 0.5, y: 1.0, w: 4.3, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    const limits = [
        'ZK-EVM 기술 성숙도에 따른 증명 생성 시간 변동',
        '복잡한 스마트 컨트랙트에서의 증명 크기 증가',
        '상태 채널 참여자의 온라인 요구사항',
        '대규모 실제 환경에서의 추가 검증 필요'
    ];
    limits.forEach((limit, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.4 + idx * 0.55, w: 4.3, h: 0.45, fill: { color: 'FDEDEC' }, rectRadius: 0.05 });
        slide.addText(limit, { x: 0.6, y: 1.45 + idx * 0.55, w: 4.1, h: 0.35, fontSize: 10, color: navy, fontFace: 'Arial' });
    });
    // Future work
    slide.addText('향후 연구 방향', { x: 5.2, y: 1.0, w: 4.3, h: 0.3, fontSize: 14, color: teal, fontFace: 'Arial', bold: true });
    const futures = [
        { title: '기술적 확장', desc: '다중 롤업 간 상호운용성\n증명 집계를 통한 추가 비용 절감' },
        { title: '응용 확장', desc: '탈중앙화 금융(DeFi) 프로토콜\n공급망 관리, 디지털 신원 인증' },
        { title: '이론적 심화', desc: '다자간 분쟁 해결 프로토콜\n양자 내성 영지식 증명 통합' }
    ];
    futures.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 5.2, y: 1.4 + idx * 0.95, w: 4.3, h: 0.85, fill: { color: 'E8F8F5' }, rectRadius: 0.05 });
        slide.addText(item.title, { x: 5.3, y: 1.45 + idx * 0.95, w: 4.1, h: 0.3, fontSize: 12, color: green, fontFace: 'Arial', bold: true });
        slide.addText(item.desc, { x: 5.3, y: 1.75 + idx * 0.95, w: 4.1, h: 0.45, fontSize: 10, color: gray, fontFace: 'Arial' });
    });
    slide.addNotes(`[연구의 한계 및 향후 연구]
연구의 한계점과 향후 연구 방향을 말씀드리겠습니다.

연구의 한계:
1. ZK-EVM 기술 성숙도
   - 증명 생성 시간이 ZK-EVM 발전에 따라 변동
   - 현재 기술로는 30-50초 소요

2. 복잡한 스마트 컨트랙트
   - 복잡한 컨트랙트에서 증명 크기가 증가할 수 있음

3. 상태 채널 참여자의 온라인 요구
   - 분쟁 당사자가 오프라인이면 프로토콜 진행 지연

4. 대규모 실제 환경
   - 추가적인 대규모 테스트 필요

향후 연구 방향:
1. 기술적 확장
   - 다중 롤업 간 상호운용성
   - 증명 집계를 통한 추가 비용 절감

2. 응용 확장
   - DeFi 프로토콜, 공급망 관리, 디지털 신원 인증

3. 이론적 심화
   - 다자간 분쟁 해결 프로토콜
   - 양자 내성 영지식 증명 통합`);

    // Slide 21: Conclusion
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: navy } });
    slide.addText('연구 요약', { x: 0.5, y: 1.0, w: 9, h: 0.5, fontSize: 24, color: 'FFFFFF', fontFace: 'Arial', bold: true, align: 'center' });
    // Summary cards
    const summaryCards = [
        { num: '3', label: '출판 논문' },
        { num: '99.6%', label: '가스 비용 절감' },
        { num: '1~2h', label: '확정 시간 (7일→)' }
    ];
    summaryCards.forEach((item, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x: 1 + idx * 2.8, y: 1.8, w: 2.5, h: 1.3, fill: { color: '2E4053' }, rectRadius: 0.1 });
        slide.addText(item.num, { x: 1 + idx * 2.8, y: 1.95, w: 2.5, h: 0.6, fontSize: 28, color: gold, fontFace: 'Arial', align: 'center', bold: true });
        slide.addText(item.label, { x: 1 + idx * 2.8, y: 2.6, w: 2.5, h: 0.4, fontSize: 12, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    });
    // Key result
    slide.addShape(pptx.shapes.RECTANGLE, { x: 1.5, y: 3.4, w: 7, h: 1.0, fill: { color: teal }, rectRadius: 0.1 });
    slide.addText('옵티미스틱의 비용 효율성 + ZK의 빠른 확정', { x: 1.6, y: 3.5, w: 6.8, h: 0.4, fontSize: 18, color: 'FFFFFF', fontFace: 'Arial', align: 'center', bold: true });
    slide.addText('하이브리드 프로토콜로 블록체인 확장성 트릴레마의 새로운 해결책 제시', { x: 1.6, y: 3.95, w: 6.8, h: 0.35, fontSize: 14, color: 'E8F8F5', fontFace: 'Arial', align: 'center' });
    slide.addNotes(`[연구 요약 - 결론]
본 연구의 핵심 성과를 요약하겠습니다.

핵심 수치:
- 3편의 연구 논문
  · 논문 1: CBDC 시스템 (출판 완료)
  · 논문 2: 분산 스토리지 (출판 확정)
  · 논문 3: 하이브리드 분쟁 프로토콜 (핵심 기여)

- 99.6% 가스 비용 절감
  · 분쟁 해결 비용: $3,942 → $61.34

- 1~2시간 확정 시간 (기존 7일에서 단축)

핵심 성과:
"옵티미스틱의 비용 효율성 + ZK의 빠른 확정"

하이브리드 프로토콜을 통해 블록체인 확장성 트릴레마의
새로운 해결책을 제시했습니다.

본 연구는 계층 2 솔루션의 실용성을 크게 향상시키며,
금융, 스토리지 등 다양한 분야에 적용 가능합니다.`);

    // Slide 22: Thank you
    slide = pptx.addSlide();
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: navy } });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 0.1, fill: { color: teal } });
    slide.addText('감사합니다', { x: 0.5, y: 1.5, w: 9, h: 0.7, fontSize: 36, color: 'FFFFFF', fontFace: 'Arial', bold: true, align: 'center' });
    slide.addText('Thank you for your attention', { x: 0.5, y: 2.2, w: 9, h: 0.4, fontSize: 16, color: teal, fontFace: 'Arial', align: 'center' });
    slide.addText('옵티미스틱 롤업의 분쟁 해결 지연 문제 극복을 위한\n하이브리드 프로토콜 설계 및 응용', { x: 0.5, y: 3.0, w: 9, h: 0.7, fontSize: 14, color: lightGray, fontFace: 'Arial', align: 'center' });
    slide.addText('숭실대학교 대학원 컴퓨터학과', { x: 0.5, y: 3.9, w: 9, h: 0.3, fontSize: 14, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    slide.addText('황재승 (Jae-seung Hwang)', { x: 0.5, y: 4.25, w: 9, h: 0.3, fontSize: 14, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    slide.addShape(pptx.shapes.RECTANGLE, { x: 3.5, y: 4.7, w: 3, h: 0.5, fill: { color: '2E4053' }, rectRadius: 0.1 });
    slide.addText('Q & A', { x: 3.5, y: 4.8, w: 3, h: 0.3, fontSize: 14, color: 'FFFFFF', fontFace: 'Arial', align: 'center' });
    slide.addNotes(`[감사 슬라이드 - Q&A]
이상으로 "옵티미스틱 롤업의 분쟁 해결 지연 문제 극복을 위한
하이브리드 프로토콜 설계 및 응용"에 대한 발표를 마치겠습니다.

질문을 받겠습니다.

[예상 질문 및 답변]

Q1: 왜 7일 확정 지연이 문제인가요?
A1: 금융 서비스는 실시간 결제가 필수적입니다. 7일은 사용자 경험을 크게 저하시킵니다.

Q2: ZK 롤업 대신 왜 하이브리드 방식인가요?
A2: ZK 롤업은 모든 트랜잭션에 증명 비용이 발생합니다. 하이브리드는 분쟁 시에만 비용 발생.

Q3: 1~2시간도 여전히 길지 않나요?
A3: 기존 7일 대비 99% 이상 단축입니다. 또한 대부분의 트랜잭션은 분쟁 없이 즉시 처리됩니다.

Q4: 실제 적용 사례는?
A4: 논문 1의 CBDC, 논문 2의 분산 스토리지에서 검증했습니다.

Q5: 보안성은 어떻게 보장되나요?
A5: ZK 증명의 수학적 보안성 + 208배 페널티로 공격 억제.

감사합니다.`);

    // Save
    const outputPath = path.join(__dirname, 'dissertation-defense-v4.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log('Presentation created successfully:', outputPath);
}

createPresentation().catch(console.error);
