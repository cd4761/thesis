const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, PageOrientation, LevelFormat,
        TableOfContents, HeadingLevel, BorderStyle, WidthType,
        VerticalAlign, ShadingType, PageNumber, PageBreak } = require('docx');
const fs = require('fs');
const path = require('path');

async function createDissertation() {
    const doc = new Document({
        styles: {
            default: {
                document: {
                    run: { font: "바탕", size: 22 } // 11pt default, 신명조 대체
                }
            },
            paragraphStyles: [
                // Title style for cover
                { id: "Title", name: "Title", basedOn: "Normal",
                    run: { size: 44, bold: true, font: "바탕" },
                    paragraph: { spacing: { before: 240, after: 240 }, alignment: AlignmentType.CENTER } },
                // Heading styles - 장 제목: 16pt, 견명조
                { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
                    run: { size: 32, bold: true, font: "HY견명조" },
                    paragraph: { spacing: { before: 480, after: 240 }, alignment: AlignmentType.CENTER, outlineLevel: 0 } },
                // 중제목 (1.1): 13pt, 신명조, 진하게
                { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
                    run: { size: 26, bold: true, font: "바탕" },
                    paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 1 } },
                // 소제목 (1.1.1): 11pt, 중고딕, 진하게
                { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
                    run: { size: 22, bold: true, font: "돋움" },
                    paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 } },
                // Body text: 11pt, 신명조, 줄간격 200%
                { id: "BodyText", name: "Body Text", basedOn: "Normal",
                    run: { size: 22, font: "바탕" },
                    paragraph: { spacing: { after: 120, line: 480, lineRule: "auto" }, indent: { firstLine: 400 } } },
                // Abstract style
                { id: "Abstract", name: "Abstract", basedOn: "Normal",
                    run: { size: 22, font: "바탕" },
                    paragraph: { spacing: { after: 120, line: 480, lineRule: "auto" } } }
            ]
        },
        numbering: {
            config: [
                { reference: "chapter-list",
                    levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "제 %1 장", alignment: AlignmentType.LEFT,
                        style: { paragraph: { indent: { left: 0, hanging: 0 } } } }] }
            ]
        },
        sections: [
            // ==================== 표지 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                children: [
                    new Paragraph({ spacing: { before: 1200 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 600 },
                        children: [new TextRun({ text: "박사학위 청구논문", size: 28, font: "맑은 고딕" })]
                    }),
                    new Paragraph({ spacing: { before: 800 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                        children: [new TextRun({ text: "옵티미스틱 롤업의 분쟁 해결 지연 문제 극복을 위한", size: 36, bold: true, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 400 },
                        children: [new TextRun({ text: "하이브리드 프로토콜 설계 및 응용", size: 36, bold: true, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 600 },
                        children: [new TextRun({ text: "Design and Application of a Hybrid Protocol for Overcoming Dispute Resolution Delays in Optimistic Rollups", size: 22, font: "Times New Roman", italics: true })]
                    }),
                    new Paragraph({ spacing: { before: 1200 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                        children: [new TextRun({ text: "2025년 2월", size: 26, font: "맑은 고딕" })]
                    }),
                    new Paragraph({ spacing: { before: 800 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                        children: [new TextRun({ text: "숭실대학교 대학원", size: 28, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 400 },
                        children: [new TextRun({ text: "컴퓨터학과", size: 28, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                        children: [new TextRun({ text: "황 재 승", size: 32, bold: true, font: "맑은 고딕" })]
                    })
                ]
            },
            // ==================== 인준서 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                children: [
                    new Paragraph({ spacing: { before: 800 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 600 },
                        children: [new TextRun({ text: "인 준 서", size: 36, bold: true, font: "맑은 고딕" })]
                    }),
                    new Paragraph({ spacing: { before: 400 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 800 },
                        children: [new TextRun({ text: "황재승의 박사학위 청구논문을 인준함", size: 26, font: "맑은 고딕" })]
                    }),
                    new Paragraph({ spacing: { before: 400 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                        children: [new TextRun({ text: "2025년 2월", size: 24, font: "맑은 고딕" })]
                    }),
                    new Paragraph({ spacing: { before: 1200 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 400 },
                        indent: { right: 720 },
                        children: [new TextRun({ text: "위 원 장 :                    (인)", size: 24, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 400 },
                        indent: { right: 720 },
                        children: [new TextRun({ text: "위    원 :                    (인)", size: 24, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 400 },
                        indent: { right: 720 },
                        children: [new TextRun({ text: "위    원 :                    (인)", size: 24, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 400 },
                        indent: { right: 720 },
                        children: [new TextRun({ text: "위    원 :                    (인)", size: 24, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 400 },
                        indent: { right: 720 },
                        children: [new TextRun({ text: "위    원 :                    (인)", size: 24, font: "맑은 고딕" })]
                    }),
                    new Paragraph({ spacing: { before: 800 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [new TextRun({ text: "숭실대학교 대학원", size: 26, font: "맑은 고딕" })]
                    })
                ]
            },
            // ==================== 감사의 글 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("감사의 글")]
                    }),
                    new Paragraph({ spacing: { before: 400 }, children: [] }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun({ text: "[감사의 글 내용을 작성하세요]", color: "808080" })]
                    })
                ]
            },
            // ==================== 국문 초록 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("국문 초록")]
                    }),
                    new Paragraph({ spacing: { before: 400 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 400 },
                        children: [new TextRun({ text: "옵티미스틱 롤업의 분쟁 해결 지연 문제 극복을 위한 하이브리드 프로토콜 설계 및 응용", size: 26, bold: true, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 600 },
                        children: [new TextRun({ text: "황 재 승", size: 24, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                        children: [new TextRun({ text: "숭실대학교 대학원 컴퓨터학과", size: 22, font: "맑은 고딕" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 400 },
                        children: [new TextRun({ text: "지도교수: 김영한", size: 22, font: "맑은 고딕" })]
                    }),
                    new Paragraph({ spacing: { before: 200 }, children: [] }),
                    new Paragraph({
                        style: "Abstract",
                        children: [new TextRun("블록체인 기술은 탈중앙화된 신뢰를 제공하지만, 확장성 문제로 인해 대규모 상용화에 한계가 있다. 옵티미스틱 롤업은 트랜잭션을 오프체인에서 실행하여 처리량을 100배 이상 향상시킬 수 있으나, 분쟁 발생 시 약 7일간의 챌린지 기간이 필요하다는 근본적인 한계가 있다. 본 연구는 이 문제를 해결하기 위해 ZK 상태 채널 기반의 하이브리드 분쟁 해결 프로토콜을 제안한다.")]
                    }),
                    new Paragraph({
                        style: "Abstract",
                        children: [new TextRun("먼저 옵티미스틱 롤업 기반의 CBDC 시스템을 설계하여 10,483 TPS와 95%의 비용 절감을 달성하였으나 7일 확정 지연 문제를 확인하였다. 이어서 옵티미스틱 롤업과 IPFS를 결합한 분산 스토리지 시스템을 구현하여 99.99%의 비용 절감을 달성하였으나 동일한 지연 문제가 존재하였다.")]
                    }),
                    new Paragraph({
                        style: "Abstract",
                        children: [new TextRun("이를 해결하기 위해 본 연구는 RVP(Reactive Validity Proof) 패러다임을 제안한다. 평상시에는 옵티미스틱 방식으로 운영하되, 분쟁 발생 시에만 해당 명령어에 대한 ZK 증명을 생성하는 '게으른 증명' 전략이다. 오프체인 이등분 프로토콜로 분쟁 지점을 신속히 식별하고, 단일 명령어 ZK 증명으로 최종 판결을 수행한다.")]
                    }),
                    new Paragraph({
                        style: "Abstract",
                        children: [new TextRun("실험 결과, 제안 프로토콜은 분쟁 해결 시간을 7일에서 평균 47분으로 99.5% 단축하고, 비용을 $3,942에서 $61.34로 98.4% 절감하였다. CBDC와 분산 스토리지 시스템에 적용하여 실효성을 검증한 결과, 출금 확정 시간이 평균 1시간 이내로 개선되어 실시간 서비스에 가까운 사용자 경험을 제공할 수 있음을 확인하였다.")]
                    }),
                    new Paragraph({ spacing: { before: 600 }, children: [] }),
                    new Paragraph({
                        children: [new TextRun({ text: "주요어: ", bold: true, size: 22 }), new TextRun({ text: "옵티미스틱 롤업, ZK 증명, 상태 채널, 블록체인 확장성, CBDC, 분산 스토리지", size: 22 })]
                    })
                ]
            },
            // ==================== 목차 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("목 차")]
                    }),
                    new Paragraph({ spacing: { before: 400 }, children: [] }),
                    new TableOfContents("목차", {
                        hyperlink: true,
                        headingStyleRange: "1-3"
                    }),
                    new Paragraph({ children: [new PageBreak()] }),
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("표 목차")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[표 목차는 문서 완성 후 자동 생성됩니다]", color: "808080" })]
                    }),
                    new Paragraph({ children: [new PageBreak()] }),
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("그림 목차")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[그림 목차는 문서 완성 후 자동 생성됩니다]", color: "808080" })]
                    })
                ]
            },
            // ==================== 제 1 장 서론 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                headers: {
                    default: new Header({
                        children: [new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [new TextRun({ text: "제 1 장 서론", size: 20, font: "맑은 고딕" })]
                        })]
                    })
                },
                footers: {
                    default: new Footer({
                        children: [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({ children: [PageNumber.CURRENT], size: 20 })]
                        })]
                    })
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("제 1 장 서 론")]
                    }),
                    // 1.1 연구 배경
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("1.1 연구 배경")]
                    }),
                    // 1.1.1 블록체인 확장성 문제
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("1.1.1 블록체인 확장성 문제")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("블록체인 기술은 탈중앙화된 신뢰 메커니즘을 통해 금융, 공급망, 디지털 자산 관리 등 다양한 분야에서 혁신을 이끌고 있다. 그러나 블록체인의 대중화와 함께 확장성(scalability) 문제가 핵심 과제로 부상하였다. 비탈릭 부테린(Vitalik Buterin)이 제시한 '블록체인 트릴레마(Blockchain Trilemma)'에 따르면, 블록체인 시스템은 확장성, 보안성, 탈중앙화라는 세 가지 속성 중 두 가지만 동시에 달성할 수 있으며, 나머지 하나는 희생해야 한다[1].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이더리움(Ethereum)을 비롯한 주요 스마트 컨트랙트 플랫폼은 초당 약 15~30건의 트랜잭션만 처리할 수 있어, 대규모 서비스 운영에 한계가 있다. 비자(Visa)가 초당 약 65,000건, 페이팔(PayPal)이 초당 약 193건의 트랜잭션을 처리하는 것과 비교하면, 블록체인의 처리량은 현저히 낮은 수준이다.")]
                    }),
                    // 1.1.2 계층 2 솔루션의 등장
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("1.1.2 계층 2 솔루션의 등장")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이러한 확장성 문제를 해결하기 위해 계층 2(Layer 2) 솔루션이 등장하였다. 계층 2 솔루션은 메인 블록체인(계층 1)의 보안성을 활용하면서 트랜잭션을 오프체인에서 처리하여 처리량을 대폭 향상시키는 접근법이다. 계층 2 솔루션에는 상태 채널(State Channel), 플라즈마(Plasma), 롤업(Rollup) 등 다양한 기술이 포함된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("계층 2 솔루션 중 롤업(Rollup)은 가장 유망한 기술로 평가받는다. 롤업은 다수의 트랜잭션을 묶어 압축된 형태로 계층 1에 기록하며, 검증 방식에 따라 옵티미스틱 롤업(Optimistic Rollup)과 영지식 롤업(ZK Rollup)으로 구분된다.")]
                    }),
                    // 1.1.3 롤업 기술의 특성
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("1.1.3 롤업 기술의 특성")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업은 트랜잭션이 기본적으로 유효하다고 가정하고, 이의가 제기될 경우에만 사기 증명(fraud proof)을 통해 검증한다. 반면 영지식 롤업은 모든 트랜잭션에 대해 영지식 증명(zero-knowledge proof)을 생성하여 즉각적인 검증을 수행한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업은 기존 이더리움 가상머신(EVM)과의 호환성이 높고 구현이 상대적으로 용이하여 Arbitrum, Optimism 등 주요 플랫폼에서 채택되었다. 그러나 옵티미스틱 롤업은 분쟁 발생 시 최종 확정까지 약 7일의 챌린지 기간(challenge period)이 필요하다는 근본적인 한계가 있다.")]
                    }),
                    // 1.2 문제 정의
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("1.2 문제 정의")]
                    }),
                    // 1.2.1 7일 확정 지연 문제
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("1.2.1 7일 확정 지연 문제")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업의 7일 확정 지연은 실제 서비스 운영에 심각한 제약을 초래한다. 첫째, 금융 서비스에서 자금 이동의 즉시성이 요구되는 상황에서 7일간의 대기 시간은 사용자 경험을 크게 저하시킨다. 둘째, 탈중앙화 금융(DeFi) 애플리케이션에서 유동성 공급자는 7일간 자금이 묶이는 기회비용을 감수해야 한다. 셋째, 중앙은행 디지털 화폐(CBDC)나 기업용 블록체인 시스템에서는 결제 확정성의 지연이 채택 장벽으로 작용한다.")]
                    }),
                    // 1.2.2 선행 연구의 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("1.2.2 선행 연구의 한계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이러한 문제는 본 연구의 선행 연구인 옵티미스틱 롤업 기반 CBDC 시스템[2]과 분산 스토리지 시스템[3]에서도 동일하게 발생하였다. 두 시스템 모두 옵티미스틱 롤업을 통해 높은 처리량과 낮은 비용을 달성하였으나, 분쟁 발생 시 7일간의 확정 지연이 불가피했다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("CBDC 시스템의 경우 초당 10,483건의 트랜잭션 처리량을 달성하였으나, 분쟁 시 7일 지연은 실시간 결제 요구사항과 충돌한다. 분산 스토리지 시스템의 경우 99.99%의 비용 절감을 실현하였으나, 데이터 무결성 분쟁 시 신속한 해결이 어렵다는 한계가 있다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("기존 연구에서는 이 문제를 해결하기 위해 영지식 롤업으로의 전환을 제안하였으나, 영지식 롤업은 모든 트랜잭션에 대해 고비용의 증명 생성이 필요하여 실용성이 제한된다. 현재 영지식 증명 생성에는 상당한 연산 자원이 요구되며, 이더리움의 EVM 호환 영지식 증명(ZK-EVM)은 아직 기술적 성숙도가 부족한 상황이다.")]
                    }),
                    // 1.3 연구 목표 및 기여
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("1.3 연구 목표 및 기여")]
                    }),
                    // 1.3.1 연구 목표
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("1.3.1 연구 목표")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구의 목표는 옵티미스틱 롤업의 비용 효율성과 영지식 롤업의 신속한 확정성을 결합한 하이브리드 프로토콜을 설계하는 것이다. 이를 위해 '반응형 유효성 증명(Reactive Validity Proof, RVP)' 패러다임을 제안한다. RVP 패러다임의 핵심 아이디어는 평상시에는 옵티미스틱 방식으로 운영하되, 분쟁이 발생할 경우에만 영지식 증명을 생성하여 신속하게 분쟁을 해결하는 것이다.")]
                    }),
                    // 1.3.2 학술적 기여
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("1.3.2 학술적 기여")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구의 학술적 기여는 다음과 같다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        indent: { left: 720 },
                        children: [new TextRun("첫째, ZK 상태 채널(ZK State Channel)을 활용한 오프체인 이등분 프로토콜(off-chain bisection protocol)을 설계하였다. 기존 온체인 이등분 프로토콜은 최대 73라운드의 온체인 상호작용이 필요하여 높은 가스 비용과 시간이 소요되었다. 제안 프로토콜은 이등분 과정을 오프체인에서 수행하고 최종 결과만 영지식 증명으로 검증하여, 분쟁 해결 시간을 7일에서 1~2시간으로 단축하고 가스 비용을 98.4% 절감한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        indent: { left: 720 },
                        children: [new TextRun("둘째, 온디맨드(on-demand) ZK 증명 시스템을 설계하였다. 분쟁이 발생하지 않는 정상 운영 시에는 영지식 증명 생성 비용이 전혀 발생하지 않으며, 분쟁 시에만 해당 트랜잭션에 대한 증명을 생성한다. 이를 통해 영지식 롤업 대비 평균 90% 이상의 증명 비용 절감이 가능하다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        indent: { left: 720 },
                        children: [new TextRun("셋째, 제안된 하이브리드 프로토콜을 CBDC 시스템과 분산 스토리지 시스템에 통합 적용하여 실증적으로 검증하였다. 두 시스템 모두 기존의 높은 처리량과 낮은 비용을 유지하면서 분쟁 해결 시간을 획기적으로 단축하는 성과를 달성하였다.")]
                    }),
                    // 1.4 논문 구성
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("1.4 논문 구성")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 논문은 다음과 같이 구성된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제2장에서는 본 연구의 이론적 배경이 되는 관련 연구를 살펴본다. 블록체인 확장성 문제와 트릴레마, 옵티미스틱 롤업과 영지식 롤업의 동작 원리, 상태 채널의 개념, 영지식 증명 기술의 발전 과정을 검토하고 기존 연구의 한계점을 분석한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제3장에서는 옵티미스틱 롤업 기반 CBDC 시스템을 다룬다. 이더리움 기반 2계층 CBDC 아키텍처를 설계하고, 배치 처리 메커니즘과 크로스-L2 전송 프로토콜을 구현한다. 실험을 통해 초당 10,483건의 트랜잭션 처리량을 검증하며, 7일 확정 지연의 한계를 명시한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제4장에서는 옵티미스틱 롤업 기반 분산 클라우드 스토리지 시스템을 다룬다. IPFS와 이더리움, 옵티미스틱 롤업을 결합한 3계층 아키텍처를 설계하고, 파일 업로드/다운로드/삭제 워크플로우를 구현한다. 실험을 통해 99.99%의 비용 절감을 검증하며, 데이터 무결성 분쟁 시 7일 지연의 한계를 명시한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제5장에서는 본 논문의 핵심 기여인 ZK 상태 채널 기반 하이브리드 분쟁 프로토콜을 다룬다. RVP 패러다임을 정의하고, 오프체인 이등분 프로토콜과 온디맨드 ZK 증명 시스템을 설계한다. 스마트 컨트랙트 구현 및 실험을 통해 98.4%의 비용 절감과 99%의 시간 단축을 검증한다. 또한 제안 프로토콜을 3장과 4장의 시스템에 통합 적용한 결과를 제시한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제6장에서는 본 연구의 결론을 제시하고, 연구의 의의와 한계점, 향후 연구 방향을 논의한다.")]
                    })
                ]
            },
            // ==================== 제 2 장 관련 연구 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                headers: {
                    default: new Header({
                        children: [new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [new TextRun({ text: "제 2 장 관련 연구", size: 20, font: "맑은 고딕" })]
                        })]
                    })
                },
                footers: {
                    default: new Footer({
                        children: [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({ children: [PageNumber.CURRENT], size: 20 })]
                        })]
                    })
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("제 2 장 관련 연구")]
                    }),
                    // 2.1 블록체인 확장성 문제
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("2.1 블록체인 확장성 문제")]
                    }),
                    // 2.1.1 블록체인 트릴레마
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.1.1 블록체인 트릴레마")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("블록체인 트릴레마(Blockchain Trilemma)는 이더리움의 창시자 비탈릭 부테린(Vitalik Buterin)이 제시한 개념으로, 블록체인 시스템이 확장성(Scalability), 보안성(Security), 탈중앙화(Decentralization)라는 세 가지 핵심 속성을 동시에 완벽하게 달성할 수 없다는 것을 의미한다[4].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("확장성은 시스템이 증가하는 트랜잭션 수요를 처리할 수 있는 능력을 의미한다. 보안성은 악의적인 공격으로부터 네트워크를 보호하고 트랜잭션의 무결성을 보장하는 능력이다. 탈중앙화는 단일 주체가 네트워크를 통제하지 못하도록 권한을 분산시키는 특성이다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("비트코인과 이더리움과 같은 1세대 블록체인은 보안성과 탈중앙화를 우선시하여 확장성을 희생하였다. 반면 EOS나 솔라나(Solana)와 같은 플랫폼은 확장성을 높이기 위해 탈중앙화 수준을 낮추는 선택을 하였다. 이러한 트레이드오프는 블록체인 기술의 대중화에 있어 핵심 과제로 남아있다.")]
                    }),
                    // 2.1.2 처리량 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.1.2 처리량 한계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("현재 주요 블록체인 플랫폼의 처리량은 기존 금융 시스템에 비해 현저히 낮은 수준이다. 비트코인은 초당 약 7건, 이더리움은 초당 약 15~30건의 트랜잭션만 처리할 수 있다. 이는 비자(Visa)의 초당 약 65,000건, 마스터카드의 초당 약 5,000건과 비교하면 상당한 격차가 있다[5].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이러한 처리량 한계의 주요 원인은 블록체인의 합의 메커니즘에 있다. 모든 노드가 모든 트랜잭션을 검증해야 하는 구조에서는 네트워크의 처리 속도가 가장 느린 노드에 의해 제한된다. 또한 블록 크기와 블록 생성 시간의 제약으로 인해 단위 시간당 처리 가능한 트랜잭션 수가 한정된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("2017년 크립토키티(CryptoKitties) 사태와 2021년 NFT 붐 시기에는 이더리움 네트워크의 혼잡으로 인해 가스비가 급등하고 트랜잭션 확정 시간이 크게 지연되는 문제가 발생하였다. 이는 블록체인의 실용적 활용에 있어 확장성 문제 해결이 시급함을 보여주는 사례이다.")]
                    }),
                    // 2.2 계층 2 솔루션
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("2.2 계층 2 솔루션")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("계층 2(Layer 2) 솔루션은 메인 블록체인(계층 1)의 보안성을 활용하면서 트랜잭션 처리를 오프체인으로 이전하여 확장성을 향상시키는 접근법이다. 계층 2 솔루션은 크게 상태 채널(State Channel), 플라즈마(Plasma), 롤업(Rollup)으로 분류된다[6].")]
                    }),
                    // 2.2.1 옵티미스틱 롤업
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.2.1 옵티미스틱 롤업")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업(Optimistic Rollup)은 트랜잭션의 유효성을 기본적으로 신뢰하고, 이의가 제기될 경우에만 검증을 수행하는 방식이다. '옵티미스틱(낙관적)'이라는 명칭은 이러한 신뢰 기반 접근법에서 유래하였다[7].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업의 동작 원리는 다음과 같다. 먼저 시퀀서(Sequencer)가 다수의 트랜잭션을 수집하여 배치(batch)로 묶는다. 시퀀서는 이 배치를 실행하고 상태 루트(state root)를 계산한 후, 트랜잭션 데이터와 함께 계층 1에 제출한다. 제출된 배치는 챌린지 기간(challenge period) 동안 유효한 것으로 간주되며, 이 기간 내에 검증자가 사기 증명(fraud proof)을 제출하지 않으면 최종 확정된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업의 장점은 EVM 호환성이 높아 기존 이더리움 스마트 컨트랙트를 최소한의 수정으로 배포할 수 있다는 점이다. 또한 모든 트랜잭션에 대해 증명을 생성할 필요가 없어 연산 비용이 낮다. 대표적인 플랫폼으로는 Arbitrum, Optimism, Base 등이 있으며, 현재 가장 널리 사용되는 계층 2 솔루션이다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("그러나 옵티미스틱 롤업의 핵심 단점은 챌린지 기간으로 인한 확정 지연이다. 현재 Arbitrum과 Optimism은 약 7일의 챌린지 기간을 설정하고 있으며, 이 기간 동안 계층 1로의 자금 인출이 지연된다. 이는 유동성 제공자와 일반 사용자 모두에게 상당한 불편을 초래한다.")]
                    }),
                    // 2.2.2 ZK 롤업
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.2.2 ZK 롤업")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("영지식 롤업(ZK Rollup)은 모든 트랜잭션 배치에 대해 영지식 증명(zero-knowledge proof)을 생성하여 유효성을 즉각 검증하는 방식이다. 영지식 증명은 특정 연산이 올바르게 수행되었음을 증명하면서도 연산의 입력값을 공개하지 않는 암호학적 기법이다[8].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("ZK 롤업의 동작 원리는 다음과 같다. 시퀀서가 트랜잭션 배치를 실행한 후, 해당 실행이 올바르게 수행되었음을 증명하는 유효성 증명(validity proof)을 생성한다. 이 증명과 함께 상태 루트가 계층 1에 제출되면, 검증 컨트랙트가 증명을 검증하고 즉시 트랜잭션을 확정한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("ZK 롤업의 가장 큰 장점은 즉각적인 확정성(instant finality)이다. 유효성 증명이 검증되는 즉시 트랜잭션이 확정되므로, 옵티미스틱 롤업과 같은 7일 지연 문제가 없다. 또한 트랜잭션 데이터를 압축하여 계층 1에 저장할 수 있어 데이터 가용성 비용을 절감할 수 있다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("그러나 ZK 롤업은 여러 한계점을 가진다. 첫째, 영지식 증명 생성에 상당한 연산 자원과 시간이 필요하다. 둘째, 일반적인 스마트 컨트랙트 실행을 지원하는 ZK-EVM의 구현이 기술적으로 복잡하다. 셋째, 증명 생성 비용이 높아 소규모 트랜잭션에서는 비효율적일 수 있다. 대표적인 플랫폼으로는 zkSync, StarkNet, Polygon zkEVM 등이 있다.")]
                    }),
                    // 2.2.3 롤업 기술 비교
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.2.3 롤업 기술 비교")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업과 ZK 롤업은 각각 고유한 장단점을 가지며, 표 2.1은 두 기술의 주요 특성을 비교한 것이다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업은 EVM 호환성과 낮은 연산 비용으로 인해 현재 시장에서 더 넓은 채택을 받고 있다. 그러나 7일 확정 지연 문제는 금융 서비스, CBDC, 실시간 결제 시스템 등에서 치명적인 제약이 된다. ZK 롤업은 즉각적 확정성을 제공하지만, 모든 트랜잭션에 대한 증명 생성 비용이 실용성을 제한한다.")]
                    }),
                    // 2.3 상태 채널
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("2.3 상태 채널")]
                    }),
                    // 2.3.1 상태 채널의 개념
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.3.1 상태 채널의 개념")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("상태 채널(State Channel)은 두 당사자 간의 반복적인 상호작용을 오프체인에서 수행하고, 최종 상태만 온체인에 기록하는 계층 2 솔루션이다. 라이트닝 네트워크(Lightning Network)와 레이든 네트워크(Raiden Network)가 대표적인 구현 사례이다[9].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("상태 채널의 동작 과정은 다음과 같다. 먼저 참여자들이 온체인에 자금을 예치하고 채널을 개설한다. 이후 참여자들은 오프체인에서 무제한의 트랜잭션을 교환하며, 각 트랜잭션은 양측의 서명을 포함한다. 최종적으로 참여자들이 합의한 최종 상태를 온체인에 제출하여 채널을 종료하고 자금을 정산한다.")]
                    }),
                    // 2.3.2 분쟁 해결 메커니즘
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.3.2 분쟁 해결 메커니즘")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("상태 채널에서 분쟁이 발생하는 경우, 온체인 분쟁 해결 메커니즘이 작동한다. 일방이 과거 상태를 제출하려 시도하면, 상대방은 더 최신의 서명된 상태를 제출하여 이를 무효화할 수 있다. 이를 위해 챌린지 기간이 설정되며, 이 기간 내에 더 최신 상태가 제출되지 않으면 제출된 상태가 확정된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("기존 상태 채널의 분쟁 해결은 단순한 최신성 검증에 기반하지만, 복잡한 스마트 컨트랙트 실행의 정확성을 검증하는 데는 한계가 있다. 본 연구에서는 이러한 한계를 극복하기 위해 영지식 증명을 활용한 분쟁 해결 메커니즘을 제안한다.")]
                    }),
                    // 2.4 영지식 증명
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("2.4 영지식 증명")]
                    }),
                    // 2.4.1 영지식 증명의 개념
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.4.1 영지식 증명의 개념")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("영지식 증명(Zero-Knowledge Proof)은 증명자(prover)가 검증자(verifier)에게 특정 명제가 참임을 증명하면서도, 그 명제가 참인 이유에 대한 어떠한 정보도 공개하지 않는 암호학적 프로토콜이다. 1985년 Goldwasser, Micali, Rackoff가 처음 제안한 이후, 블록체인 분야에서 프라이버시 보호와 확장성 향상을 위한 핵심 기술로 발전하였다[10].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("영지식 증명은 세 가지 속성을 만족해야 한다. 완전성(Completeness)은 명제가 참이면 정직한 증명자가 검증자를 확신시킬 수 있음을 의미한다. 건전성(Soundness)은 명제가 거짓이면 부정직한 증명자가 검증자를 속일 수 없음을 의미한다. 영지식성(Zero-Knowledge)은 검증자가 명제의 참/거짓 여부 외에 어떠한 추가 정보도 얻지 못함을 의미한다.")]
                    }),
                    // 2.4.2 ZK-SNARK와 ZK-STARK
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.4.2 ZK-SNARK와 ZK-STARK")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("ZK-SNARK(Zero-Knowledge Succinct Non-Interactive Argument of Knowledge)는 간결하고 비대화형 영지식 증명 시스템이다. 증명 크기가 작고(수백 바이트) 검증 시간이 짧아(수 밀리초) 블록체인 환경에 적합하다. 그러나 신뢰할 수 있는 설정(trusted setup)이 필요하며, 양자 컴퓨터 공격에 취약할 수 있다는 단점이 있다[11].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("ZK-STARK(Zero-Knowledge Scalable Transparent Argument of Knowledge)는 투명한 설정(transparent setup)을 사용하여 신뢰 가정을 제거한 시스템이다. 양자 컴퓨터 공격에도 안전하며, 증명 생성 시간이 입력 크기에 대해 준선형(quasi-linear)으로 확장된다. 그러나 증명 크기가 ZK-SNARK에 비해 크고(수십~수백 KB), 검증 시간도 상대적으로 길다[12].")]
                    }),
                    // 2.4.3 ZK-EVM
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.4.3 ZK-EVM")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("ZK-EVM(Zero-Knowledge Ethereum Virtual Machine)은 이더리움 가상머신의 실행을 영지식 증명으로 검증할 수 있게 하는 기술이다. EVM의 복잡한 명령어 집합과 상태 전이를 산술 회로(arithmetic circuit)로 변환하는 것이 핵심 과제이다[13].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("ZK-EVM은 EVM 호환성 수준에 따라 여러 유형으로 분류된다. Type 1은 이더리움과 완전히 동일한 ZK-EVM으로, 증명 생성 비용이 가장 높다. Type 2는 EVM과 동등하지만 일부 최적화를 적용한 것이다. Type 3과 Type 4는 EVM과 호환되지만 일부 기능을 수정하여 증명 효율을 높인 것이다. 현재 대부분의 ZK 롤업 프로젝트는 Type 2~4 수준의 ZK-EVM을 구현하고 있다.")]
                    }),
                    // 2.5 기존 연구의 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("2.5 기존 연구의 한계")]
                    }),
                    // 2.5.1 옵티미스틱 롤업의 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.5.1 옵티미스틱 롤업의 한계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업의 7일 확정 지연 문제를 해결하기 위한 다양한 연구가 진행되었다. 유동성 브릿지(liquidity bridge)는 제3자가 유동성을 제공하여 즉시 인출을 가능하게 하지만, 추가 수수료가 발생하고 유동성 제공자의 자본 효율이 낮다. 패스트 브릿지(fast bridge)는 소액 인출에 대해 신속한 처리를 제공하지만, 대규모 자금 이동에는 적용하기 어렵다[14].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("다중 이등분 프로토콜(multi-round bisection protocol)을 통한 분쟁 해결은 최대 73라운드의 온체인 상호작용이 필요하여, 상당한 가스 비용과 시간이 소요된다. 각 라운드마다 온체인 트랜잭션이 필요하므로, 분쟁 당사자는 수백만 가스의 비용을 부담해야 한다.")]
                    }),
                    // 2.5.2 ZK 롤업의 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.5.2 ZK 롤업의 한계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("ZK 롤업은 모든 트랜잭션에 대해 영지식 증명을 생성해야 하므로, 상당한 연산 비용이 발생한다. 현재 ZK-SNARK 증명 생성에는 고성능 하드웨어(GPU, FPGA)가 필요하며, 대규모 배치의 경우 수 분에서 수십 분의 증명 생성 시간이 소요된다[15].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("또한 ZK-EVM의 기술적 성숙도가 아직 부족하다. 완전한 EVM 호환성을 달성한 ZK-EVM은 증명 생성 비용이 매우 높으며, 효율적인 구현을 위해서는 EVM 호환성을 일부 희생해야 한다. 이는 기존 이더리움 생태계의 스마트 컨트랙트를 그대로 활용하기 어렵게 만든다.")]
                    }),
                    // 2.5.3 본 연구의 차별점
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("2.5.3 본 연구의 차별점")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구는 옵티미스틱 롤업의 비용 효율성과 ZK 롤업의 신속한 확정성을 결합한 하이브리드 접근법을 제안한다. 핵심 아이디어는 평상시에는 옵티미스틱 방식으로 운영하여 증명 생성 비용을 회피하고, 분쟁이 발생할 경우에만 영지식 증명을 생성하여 신속하게 해결하는 것이다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이를 위해 ZK 상태 채널을 도입하여 오프체인에서 이등분 프로토콜을 수행하고, 최종 결과만 영지식 증명으로 검증한다. 이 접근법은 분쟁이 드물게 발생하는 실제 환경에서 최적의 비용 효율성을 달성하면서도, 분쟁 시 신속한 해결을 보장한다.")]
                    })
                ]
            },
            // ==================== 제 3 장 CBDC 시스템 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                headers: {
                    default: new Header({
                        children: [new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [new TextRun({ text: "제 3 장 옵티미스틱 롤업 기반 CBDC 시스템", size: 20, font: "맑은 고딕" })]
                        })]
                    })
                },
                footers: {
                    default: new Footer({
                        children: [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({ children: [PageNumber.CURRENT], size: 20 })]
                        })]
                    })
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("제 3 장 옵티미스틱 롤업 기반 CBDC 시스템")]
                    }),
                    // 3.1 서론
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("3.1 서론")]
                    }),
                    // 3.1.1 연구 배경
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.1.1 연구 배경")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("중앙은행 디지털 화폐(Central Bank Digital Currency, CBDC)는 중앙은행이 발행하는 법정 디지털 화폐로, 기존 실물 화폐의 디지털 형태이다. 전 세계적으로 현금 사용이 감소하고 디지털 결제가 증가함에 따라, 각국 중앙은행은 CBDC 도입을 적극 검토하고 있다. 국제결제은행(BIS)의 2023년 조사에 따르면, 전 세계 중앙은행의 93%가 CBDC 연구에 참여하고 있다[16].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("CBDC는 도매형(Wholesale)과 소매형(Retail)으로 구분된다. 도매형 CBDC는 금융기관 간 대규모 결제에 사용되며, 소매형 CBDC는 일반 대중의 일상적인 거래에 사용된다. 본 연구는 소매형 CBDC를 대상으로 하며, 높은 트랜잭션 처리량과 낮은 비용이 요구되는 환경에서의 확장성 문제 해결에 초점을 맞춘다.")]
                    }),
                    // 3.1.2 기존 연구의 문제점
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.1.2 기존 연구의 문제점")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("기존 블록체인 기반 CBDC 연구는 크게 허가형(permissioned) 블록체인과 공개형(public) 블록체인 접근법으로 나뉜다. 허가형 블록체인은 높은 처리량을 달성할 수 있으나, 중앙 집중화 위험과 투명성 부족의 문제가 있다. 공개형 블록체인은 투명성과 탈중앙화를 보장하지만, 앞서 언급한 확장성 한계로 인해 실용적인 CBDC 시스템 구현이 어렵다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이더리움 기반 CBDC 연구들은 네트워크 혼잡 시 높은 가스비와 긴 확정 시간으로 인해 실시간 결제 요구사항을 충족하지 못한다. 초당 15~30건의 처리량으로는 국가 단위의 결제 수요를 감당할 수 없으며, 이는 CBDC의 대중적 채택에 있어 핵심 장벽이 된다.")]
                    }),
                    // 3.2 시스템 요구사항
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("3.2 시스템 요구사항")]
                    }),
                    // 3.2.1 기능적 요구사항
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.2.1 기능적 요구사항")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구에서 제안하는 CBDC 시스템은 다음의 기능적 요구사항을 충족해야 한다. 첫째, 발행(Mint) 기능으로 중앙은행이 새로운 CBDC를 발행할 수 있어야 한다. 둘째, 전송(Transfer) 기능으로 사용자 간 CBDC 이체가 가능해야 한다. 셋째, 소각(Burn) 기능으로 유통 중인 CBDC를 회수할 수 있어야 한다. 넷째, 잔액 조회(Balance Query) 기능으로 특정 계정의 CBDC 보유량을 확인할 수 있어야 한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("또한 시스템은 다중 L2 네트워크 간 CBDC 이동을 지원하는 크로스-L2 전송(Cross-L2 Transfer) 기능을 제공해야 한다. 이를 통해 지역별 또는 용도별로 구분된 L2 네트워크 간의 상호운용성을 보장한다.")]
                    }),
                    // 3.2.2 비기능적 요구사항
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.2.2 비기능적 요구사항")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("비기능적 요구사항으로는 먼저 확장성(Scalability)이 있다. 시스템은 초당 수천 건 이상의 트랜잭션을 처리할 수 있어야 하며, L2 네트워크 추가를 통해 선형적으로 확장 가능해야 한다. 다음으로 보안성(Security)으로, 이중 지불(double spending) 공격과 위조 방지가 보장되어야 한다. 가용성(Availability)으로 시스템은 24시간 365일 중단 없이 운영되어야 한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("비용 효율성(Cost Efficiency) 측면에서 트랜잭션당 가스 비용이 기존 L1 대비 최소 90% 이상 절감되어야 한다. 마지막으로 규제 준수(Regulatory Compliance)로, 중앙은행의 통화 정책 도구와 AML/KYC 요구사항을 지원해야 한다.")]
                    }),
                    // 3.3 제안 아키텍처
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("3.3 제안 아키텍처")]
                    }),
                    // 3.3.1 2계층 아키텍처 개요
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.3.1 2계층 아키텍처 개요")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구에서는 이더리움을 계층 1(L1)으로, 옵티미스틱 롤업을 계층 2(L2)로 활용하는 2계층 CBDC 아키텍처를 제안한다. L1은 최종 정산 계층으로서 L2의 상태 루트를 저장하고, 분쟁 발생 시 중재자 역할을 수행한다. L2는 실제 CBDC 트랜잭션이 처리되는 실행 계층으로, 높은 처리량과 낮은 비용을 제공한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("아키텍처의 핵심 구성 요소는 다음과 같다. 중앙은행 노드(Central Bank Node)는 CBDC 발행 및 소각 권한을 가지며, 통화 정책을 집행한다. 시퀀서(Sequencer)는 L2 트랜잭션을 수집하고 배치로 묶어 L1에 제출한다. 검증자(Validator)는 시퀀서가 제출한 배치의 유효성을 검증하고, 부정 행위 발견 시 사기 증명을 제출한다.")]
                    }),
                    // 3.3.2 배치 처리 메커니즘
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.3.2 배치 처리 메커니즘")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("배치 처리 메커니즘은 다수의 CBDC 트랜잭션을 효율적으로 처리하기 위한 핵심 구성 요소이다. 시퀀서는 일정 시간 간격 또는 트랜잭션 수 임계값에 도달하면 수집된 트랜잭션들을 하나의 배치로 구성한다. 각 배치는 트랜잭션 목록, 이전 상태 루트, 새로운 상태 루트, 타임스탬프를 포함한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("배치 데이터 구조는 효율적인 저장과 검증을 위해 최적화되었다. 트랜잭션 데이터는 압축되어 L1 calldata에 저장되며, 상태 루트는 머클 트리(Merkle Tree) 형태로 관리된다. 이를 통해 개별 트랜잭션의 포함 여부를 효율적으로 증명할 수 있다.")]
                    }),
                    // 3.3.3 크로스-L2 전송 프로토콜
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.3.3 크로스-L2 전송 프로토콜")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("다중 L2 네트워크 환경에서 CBDC의 이동을 지원하기 위해 크로스-L2 전송 프로토콜을 설계하였다. 프로토콜은 다음 단계로 동작한다. 먼저 출발지 L2에서 사용자가 전송할 CBDC를 잠금(lock) 처리한다. 잠금 증명이 L1에 기록되면, 목적지 L2에서 해당 증명을 검증하고 동일 금액의 CBDC를 발행한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이 과정에서 L1은 신뢰할 수 있는 중재자 역할을 수행하여 이중 지불을 방지한다. 크로스-L2 전송은 L1의 블록 확정 시간에 의존하므로, 옵티미스틱 롤업의 7일 챌린지 기간이 적용되는 경우 상당한 지연이 발생할 수 있다.")]
                    }),
                    // 3.4 구현
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("3.4 구현")]
                    }),
                    // 3.4.1 스마트 컨트랙트 설계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.4.1 스마트 컨트랙트 설계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("CBDC 시스템의 핵심 스마트 컨트랙트는 다음과 같이 구성된다. CBDCToken 컨트랙트는 ERC-20 표준을 확장하여 CBDC의 발행, 전송, 소각 기능을 구현한다. 중앙은행만이 mint와 burn 함수를 호출할 수 있도록 접근 제어가 적용되며, 일반 사용자는 transfer 함수를 통해 CBDC를 이체할 수 있다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("RollupBridge 컨트랙트는 L1과 L2 간의 CBDC 입출금을 관리한다. deposit 함수는 L1에서 L2로의 CBDC 이동을, withdraw 함수는 L2에서 L1으로의 CBDC 인출을 처리한다. 인출 시에는 챌린지 기간 동안 사기 증명이 제출되지 않아야 최종 확정된다.")]
                    }),
                    // 3.4.2 시퀀서 구현
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.4.2 시퀀서 구현")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("시퀀서는 Go 언어로 구현되었으며, 높은 동시성 처리를 위해 goroutine 기반 아키텍처를 채택하였다. 트랜잭션 풀(mempool)은 우선순위 큐로 구현되어 가스 가격에 따른 트랜잭션 정렬을 지원한다. 배치 생성 모듈은 설정된 간격(기본 2초)마다 또는 트랜잭션 수가 임계값(기본 1,000건)에 도달하면 배치를 생성한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("시퀀서의 상태 관리는 LevelDB를 사용하며, 상태 루트 계산을 위한 머클 트리는 메모리 내에서 관리된다. 배치 제출 시에는 이더리움 클라이언트(geth)와 통신하여 L1 트랜잭션을 생성하고 전파한다.")]
                    }),
                    // 3.4.3 검증자 구현
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.4.3 검증자 구현")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("검증자는 시퀀서가 제출한 배치를 독립적으로 재실행하여 상태 루트의 정확성을 검증한다. 검증자는 L1에서 배치 제출 이벤트를 모니터링하고, 새로운 배치가 발견되면 해당 트랜잭션들을 로컬에서 재실행한다. 계산된 상태 루트가 제출된 상태 루트와 일치하지 않으면, 사기 증명을 생성하여 L1에 제출한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("사기 증명은 이등분 프로토콜을 통해 생성된다. 불일치가 발견된 배치 내에서 문제가 되는 단일 트랜잭션을 식별하고, 해당 트랜잭션의 실행 과정을 L1에서 재현하여 시퀀서의 부정 행위를 증명한다.")]
                    }),
                    // 3.5 실험 및 평가
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("3.5 실험 및 평가")]
                    }),
                    // 3.5.1 실험 환경
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.5.1 실험 환경")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("실험은 AWS EC2 인스턴스를 활용하여 수행되었다. 시퀀서 노드는 c5.4xlarge 인스턴스(16 vCPU, 32GB RAM)에서 운영되었으며, 검증자 노드는 c5.2xlarge 인스턴스(8 vCPU, 16GB RAM) 3대로 구성되었다. L1 네트워크는 Goerli 테스트넷을 사용하였으며, L2는 자체 구축한 옵티미스틱 롤업 네트워크를 활용하였다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("테스트 시나리오는 CBDC 전송 트랜잭션을 생성하는 부하 생성기를 통해 구성되었다. 부하 생성기는 초당 1,000건에서 20,000건까지 점진적으로 트랜잭션 발생률을 증가시키며 시스템의 처리량과 지연 시간을 측정하였다.")]
                    }),
                    // 3.5.2 처리량 평가
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.5.2 처리량 평가")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("실험 결과, 제안 시스템은 최대 초당 10,483건의 CBDC 전송 트랜잭션을 처리할 수 있음을 확인하였다. 이는 이더리움 L1의 약 15~30 TPS 대비 약 350~700배 향상된 수치이다. 배치 크기를 2,000건으로 설정하였을 때, 배치당 평균 처리 시간은 190.8ms로 측정되었다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("처리량은 L2 네트워크 추가를 통해 선형적으로 확장 가능하다. 4개의 L2 네트워크를 병렬 운영하는 시나리오에서는 총 41,932 TPS의 처리량을 달성하였다. 이는 Visa의 평균 처리량(약 1,700 TPS)을 크게 상회하는 수준이다.")]
                    }),
                    // 3.5.3 비용 분석
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.5.3 비용 분석")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("트랜잭션당 비용을 분석한 결과, L2에서의 CBDC 전송 비용은 L1 대비 약 95% 절감되었다. L1에서의 ERC-20 전송 비용이 약 65,000 gas인 반면, L2에서는 배치당 고정 비용을 트랜잭션 수로 분담하여 약 3,250 gas/tx로 감소하였다. 가스 가격 50 Gwei 기준으로, 트랜잭션당 비용은 L1에서 약 $5.85, L2에서 약 $0.29로 계산된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("연간 운영 비용을 추산하면, 하루 1억 건의 CBDC 트랜잭션을 처리할 경우 L1만 사용 시 약 $213.4M의 가스 비용이 발생하는 반면, 제안 시스템은 약 $10.6M으로 약 95%의 비용 절감이 가능하다.")]
                    }),
                    // 3.6 소결론
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("3.6 소결론")]
                    }),
                    // 3.6.1 연구 성과
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.6.1 연구 성과")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 장에서는 옵티미스틱 롤업 기반의 2계층 CBDC 시스템을 설계하고 구현하였다. 제안 시스템은 초당 10,483건의 트랜잭션 처리량과 95%의 비용 절감을 달성하여, 공개 블록체인 기반 CBDC의 실용성을 입증하였다. 또한 다중 L2 네트워크를 통한 선형 확장성과 크로스-L2 전송 프로토콜을 통한 상호운용성을 구현하였다.")]
                    }),
                    // 3.6.2 한계점
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("3.6.2 한계점")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("그러나 본 시스템은 옵티미스틱 롤업의 근본적인 한계인 7일 확정 지연 문제를 해결하지 못하였다. L2에서 L1으로의 자금 인출이나 크로스-L2 전송 시, 분쟁 해결을 위한 7일의 챌린지 기간이 필요하다. 이는 실시간 결제를 요구하는 CBDC 환경에서 심각한 사용자 경험 저하를 초래한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("분쟁이 발생할 경우 최대 73라운드의 온체인 이등분 프로토콜이 필요하며, 이는 약 500만 가스 이상의 비용과 7일 이상의 시간이 소요된다. 이러한 한계는 제5장에서 제안하는 하이브리드 프로토콜을 통해 해결될 것이다.")]
                    })
                ]
            },
            // ==================== 제 4 장 분산 스토리지 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                headers: {
                    default: new Header({
                        children: [new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [new TextRun({ text: "제 4 장 옵티미스틱 롤업 기반 분산 스토리지", size: 20, font: "맑은 고딕" })]
                        })]
                    })
                },
                footers: {
                    default: new Footer({
                        children: [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({ children: [PageNumber.CURRENT], size: 20 })]
                        })]
                    })
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("제 4 장 옵티미스틱 롤업 기반 분산 스토리지")]
                    }),
                    // 4.1 서론
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("4.1 서론")]
                    }),
                    // 4.1.1 연구 배경
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.1.1 연구 배경")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("클라우드 스토리지 시장은 지속적으로 성장하고 있으며, 2023년 기준 약 760억 달러 규모에 달한다. 그러나 중앙화된 클라우드 스토리지 서비스는 단일 장애점(Single Point of Failure), 데이터 프라이버시 침해, 서비스 제공자 종속(vendor lock-in) 등의 문제를 가지고 있다[17].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("분산 스토리지 시스템은 이러한 문제를 해결하기 위한 대안으로 주목받고 있다. IPFS(InterPlanetary File System)는 콘텐츠 주소 지정(content-addressing) 방식을 사용하여 데이터를 분산 저장하는 P2P 프로토콜이다. 그러나 IPFS 자체는 저장 인센티브 메커니즘이 없어, 노드들이 데이터를 영구적으로 보관할 동기가 부족하다.")]
                    }),
                    // 4.1.2 연구 동기
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.1.2 연구 동기")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("블록체인과 IPFS를 결합하면 스마트 컨트랙트를 통한 저장 인센티브와 데이터 무결성 검증이 가능해진다. 이더리움 기반 분산 스토리지 시스템은 파일의 메타데이터와 해시값을 블록체인에 기록하고, 실제 데이터는 IPFS에 저장하는 구조를 취한다. 그러나 이더리움의 높은 가스 비용은 소규모 파일 저장에 있어 경제적 실용성을 크게 저하시킨다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구는 옵티미스틱 롤업을 활용하여 블록체인 기반 분산 스토리지의 비용 문제를 해결하고자 한다. 옵티미스틱 롤업을 통해 메타데이터 기록 비용을 대폭 절감하면서도, 이더리움의 보안성을 그대로 활용할 수 있다.")]
                    }),
                    // 4.2 문제점 분석
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("4.2 문제점 분석")]
                    }),
                    // 4.2.1 기존 시스템의 비용 문제
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.2.1 기존 시스템의 비용 문제")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("기존 이더리움-IPFS 통합 시스템의 가장 큰 문제는 높은 온체인 비용이다. 파일 업로드 시 IPFS CID(Content Identifier)를 이더리움에 기록하는 데 약 50,000~100,000 gas가 소요된다. 가스 가격 50 Gwei 기준으로 이는 약 $4.50~$9.00에 해당하며, 소규모 파일의 경우 저장 비용이 파일 가치를 초과하는 비현실적인 상황이 발생한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("파일 삭제나 메타데이터 업데이트 시에도 추가적인 가스 비용이 발생한다. 이로 인해 기존 시스템은 대용량 파일이나 고가치 데이터에만 적합하며, 일반적인 클라우드 스토리지 대체재로서의 역할을 수행하기 어렵다.")]
                    }),
                    // 4.2.2 확장성 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.2.2 확장성 한계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이더리움의 처리량 한계로 인해 대규모 파일 업로드가 동시에 발생할 경우 네트워크 혼잡이 발생한다. 블록당 가스 한도 제약으로 인해 단일 블록에 포함될 수 있는 파일 메타데이터 기록 트랜잭션 수가 제한되며, 이는 시스템의 전체 처리량을 심각하게 제약한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("또한 네트워크 혼잡 시 가스 가격이 급등하여 비용 예측이 어렵다. 2021년 NFT 붐 시기에는 가스 가격이 평소 대비 10배 이상 상승하여, 분산 스토리지 서비스의 안정적인 운영이 불가능해졌다.")]
                    }),
                    // 4.3 제안 아키텍처
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("4.3 제안 아키텍처")]
                    }),
                    // 4.3.1 3계층 아키텍처 개요
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.3.1 3계층 아키텍처 개요")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구에서는 IPFS, 옵티미스틱 롤업(L2), 이더리움(L1)을 결합한 3계층 분산 스토리지 아키텍처를 제안한다. IPFS 계층은 실제 파일 데이터를 저장하고 콘텐츠 주소 지정 방식으로 데이터를 검색한다. L2 계층은 파일 메타데이터, 접근 제어 정보, 인센티브 관리를 담당한다. L1 계층은 L2의 상태 루트를 저장하고 분쟁 시 최종 중재자 역할을 수행한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이 구조에서 대부분의 트랜잭션은 L2에서 처리되어 비용이 대폭 절감되며, L1의 보안성은 상태 루트 검증을 통해 그대로 유지된다. IPFS의 콘텐츠 주소 지정 특성상 동일한 데이터는 중복 저장되지 않아 저장 효율성도 향상된다.")]
                    }),
                    // 4.3.2 파일 업로드 워크플로우
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.3.2 파일 업로드 워크플로우")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("파일 업로드 프로세스는 다음과 같이 진행된다. 먼저 클라이언트가 파일을 암호화하고 청크(chunk)로 분할한다. 분할된 청크들은 IPFS 네트워크에 업로드되며, 각 청크의 CID가 반환된다. 클라이언트는 파일 메타데이터(파일명, 크기, 청크 CID 목록, 암호화 키 해시 등)를 L2 스마트 컨트랙트에 기록한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("L2 시퀀서는 이 트랜잭션을 배치로 묶어 L1에 제출한다. 배치가 확정되면 파일 메타데이터는 이더리움의 보안성으로 보호된다. 저장 노드들은 IPFS에서 청크를 핀(pin)하여 영구 보관하며, 이에 대한 보상은 L2 인센티브 컨트랙트를 통해 지급된다.")]
                    }),
                    // 4.3.3 파일 다운로드 및 삭제 워크플로우
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.3.3 파일 다운로드 및 삭제 워크플로우")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("파일 다운로드 시, 클라이언트는 L2에서 파일 메타데이터를 조회하여 청크 CID 목록을 획득한다. 이후 IPFS 네트워크에서 해당 청크들을 다운로드하고, 복호화 및 재조립을 통해 원본 파일을 복원한다. 다운로드 과정은 온체인 트랜잭션이 필요 없어 추가 비용이 발생하지 않는다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("파일 삭제 시, 소유자는 L2 컨트랙트의 delete 함수를 호출하여 메타데이터를 삭제 표시한다. 저장 노드들은 이를 확인하고 IPFS에서 해당 청크의 핀을 해제한다. 삭제된 파일의 청크는 가비지 컬렉션을 통해 IPFS 네트워크에서 점진적으로 제거된다.")]
                    }),
                    // 4.4 구현
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("4.4 구현")]
                    }),
                    // 4.4.1 스마트 컨트랙트 설계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.4.1 스마트 컨트랙트 설계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("StorageManager 컨트랙트는 파일 메타데이터 관리의 핵심 역할을 수행한다. 파일 구조체는 소유자 주소, 파일명, 파일 크기, 청크 CID 배열, 암호화 키 해시, 생성 시간, 삭제 여부를 포함한다. uploadFile, deleteFile, getFileMetadata 함수를 통해 파일 관리 기능을 제공한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("IncentiveManager 컨트랙트는 저장 노드에 대한 인센티브를 관리한다. 저장 노드는 주기적으로 저장 증명(Proof of Storage)을 제출하여 파일 보관을 증명하고, 이에 대한 보상을 청구한다. 보상 계산은 저장 용량, 보관 기간, 가용성 점수를 기반으로 수행된다.")]
                    }),
                    // 4.4.2 클라이언트 구현
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.4.2 클라이언트 구현")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("클라이언트 애플리케이션은 TypeScript로 구현되었으며, ethers.js를 통해 L2 컨트랙트와 상호작용한다. 파일 암호화에는 AES-256-GCM을 사용하며, 암호화 키는 사용자의 이더리움 개인키에서 파생된다. 파일 청킹은 1MB 단위로 수행되어 IPFS의 효율적인 데이터 분산을 지원한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("클라이언트는 CLI(Command Line Interface)와 웹 인터페이스를 모두 제공한다. 웹 인터페이스는 React 기반으로 구현되었으며, MetaMask를 통한 지갑 연동과 드래그 앤 드롭 파일 업로드를 지원한다.")]
                    }),
                    // 4.4.3 저장 노드 구현
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.4.3 저장 노드 구현")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("저장 노드는 Go 언어로 구현되었으며, IPFS 데몬과 통합되어 운영된다. 노드는 L2의 파일 업로드 이벤트를 모니터링하고, 새로운 파일이 등록되면 해당 청크를 IPFS에서 핀하여 영구 보관한다. 저장 증명은 머클 증명(Merkle Proof) 기반으로 생성되어 효율적인 검증이 가능하다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("노드 운영자는 저장 용량과 대역폭을 설정하여 참여 수준을 조절할 수 있다. 노드의 가용성은 주기적인 핑(ping) 테스트를 통해 측정되며, 높은 가용성을 유지하는 노드에게 추가 보상이 지급된다.")]
                    }),
                    // 4.5 실험 및 평가
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("4.5 실험 및 평가")]
                    }),
                    // 4.5.1 실험 환경
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.5.1 실험 환경")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("실험은 AWS 인프라에서 수행되었다. L2 시퀀서는 c5.2xlarge 인스턴스에서 운영되었으며, 저장 노드 10대는 t3.medium 인스턴스로 구성되었다. IPFS 네트워크는 프라이빗 네트워크로 구축하여 외부 간섭을 배제하였다. 테스트 데이터셋은 1KB~1GB 범위의 다양한 크기의 파일 10,000개로 구성되었다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("비교 대상으로 기존 이더리움 L1 직접 기록 방식과 중앙화 클라우드 스토리지(AWS S3)를 설정하였다. 평가 지표로는 업로드 비용, 업로드 지연 시간, 다운로드 지연 시간, 처리량을 측정하였다.")]
                    }),
                    // 4.5.2 비용 분석
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.5.2 비용 분석")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("실험 결과, 제안 시스템의 파일 업로드 비용은 L1 대비 99.99% 절감되었다. L1에서 1MB 파일의 메타데이터 기록 비용이 약 $2,847인 반면, L2에서는 약 $0.28에 불과하였다. 이는 배치 처리를 통한 가스 비용 분담과 L2의 낮은 기본 가스 비용에 기인한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("파일 크기별 비용 분석 결과, 소규모 파일(1KB~1MB)에서 비용 절감 효과가 가장 두드러졌다. 대용량 파일(100MB 이상)의 경우에도 메타데이터 기록 비용은 동일하게 절감되나, IPFS 저장 비용이 전체 비용의 대부분을 차지하게 된다.")]
                    }),
                    // 4.5.3 성능 평가
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.5.3 성능 평가")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("파일 업로드 지연 시간을 측정한 결과, 평균 업로드 지연은 3.2초로 나타났다. 이 중 IPFS 업로드에 2.1초, L2 트랜잭션 확정에 1.1초가 소요되었다. L1 직접 기록 방식의 평균 15초 대비 약 79% 개선된 수치이다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("시스템의 최대 처리량은 초당 847개의 파일 업로드로 측정되었다. 이는 L2의 트랜잭션 처리량과 IPFS의 데이터 전송 속도에 의해 결정된다. 저장 노드 수를 증가시키면 IPFS 측 병목이 완화되어 처리량을 추가로 향상시킬 수 있다.")]
                    }),
                    // 4.6 소결론
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("4.6 소결론")]
                    }),
                    // 4.6.1 연구 성과
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.6.1 연구 성과")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 장에서는 IPFS, 옵티미스틱 롤업, 이더리움을 결합한 3계층 분산 스토리지 시스템을 설계하고 구현하였다. 제안 시스템은 99.99%의 비용 절감과 79%의 지연 시간 개선을 달성하여, 블록체인 기반 분산 스토리지의 실용성을 입증하였다. 암호화된 파일 저장, 인센티브 기반 저장 노드 관리, 효율적인 파일 검색 기능을 통해 완전한 분산 스토리지 솔루션을 제공한다.")]
                    }),
                    // 4.6.2 한계점
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("4.6.2 한계점")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("그러나 본 시스템도 옵티미스틱 롤업의 7일 확정 지연 문제를 피할 수 없다. 특히 데이터 무결성 분쟁이 발생할 경우, 분쟁 해결까지 7일 이상이 소요된다. 저장 노드가 잘못된 저장 증명을 제출하거나, 데이터 손상이 발생한 경우 신속한 대응이 어렵다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("또한 L2에서 L1으로의 자금(저장 보상) 인출 시에도 7일의 대기 기간이 필요하다. 이는 저장 노드 운영자의 유동성을 제약하고, 신규 노드 참여에 대한 진입 장벽으로 작용한다. 이러한 한계는 제5장에서 제안하는 하이브리드 프로토콜을 통해 해결될 것이다.")]
                    })
                ]
            },
            // ==================== 제 5 장 하이브리드 프로토콜 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                headers: {
                    default: new Header({
                        children: [new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [new TextRun({ text: "제 5 장 ZK 상태 채널 기반 하이브리드 분쟁 프로토콜", size: 20, font: "맑은 고딕" })]
                        })]
                    })
                },
                footers: {
                    default: new Footer({
                        children: [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({ children: [PageNumber.CURRENT], size: 20 })]
                        })]
                    })
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("제 5 장 ZK 상태 채널 기반 하이브리드 분쟁 프로토콜")]
                    }),
                    // 5.1 서론
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.1 서론")]
                    }),
                    // 5.1.1 연구 배경
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.1.1 연구 배경")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제3장과 제4장에서 제시한 옵티미스틱 롤업 기반 시스템들은 높은 처리량과 비용 효율성을 달성하였으나, 분쟁 발생 시 7일의 확정 지연이라는 공통된 한계를 가진다. 이 문제는 옵티미스틱 롤업의 사기 증명 메커니즘에 내재된 것으로, 기존 접근법으로는 근본적인 해결이 불가능하다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 장에서는 이 문제를 해결하기 위한 하이브리드 분쟁 프로토콜을 제안한다. 핵심 아이디어는 옵티미스틱 롤업의 비용 효율성과 영지식 롤업의 신속한 확정성을 결합하는 것이다. 평상시에는 옵티미스틱 방식으로 운영하여 증명 생성 비용을 회피하고, 분쟁이 발생할 경우에만 영지식 증명을 생성하여 신속하게 해결한다.")]
                    }),
                    // 5.1.2 연구 목표
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.1.2 연구 목표")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구의 목표는 다음과 같다. 첫째, 분쟁 해결 시간을 7일에서 1~2시간으로 단축한다. 둘째, 분쟁 해결 비용을 기존 온체인 이등분 프로토콜 대비 98% 이상 절감한다. 셋째, 정상 운영 시에는 추가적인 증명 생성 비용이 발생하지 않도록 한다. 넷째, 제3장과 제4장의 시스템에 범용적으로 적용 가능한 프로토콜을 설계한다.")]
                    }),
                    // 5.2 문제 정의
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.2 문제 정의")]
                    }),
                    // 5.2.1 기존 분쟁 해결 프로토콜의 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.2.1 기존 분쟁 해결 프로토콜의 한계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업의 분쟁 해결은 이등분 프로토콜(bisection protocol)을 통해 수행된다. 시퀀서가 제출한 상태 루트에 이의를 제기하면, 분쟁 당사자들은 문제가 되는 단일 명령어를 찾을 때까지 실행 구간을 반복적으로 이등분한다. 2^73개의 명령어로 구성된 실행 구간의 경우, 최대 73라운드의 이등분이 필요하다[18].")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("각 이등분 라운드는 온체인 트랜잭션을 필요로 하며, 블록 생성 간격과 응답 대기 시간을 고려하면 전체 분쟁 해결에 7일 이상이 소요된다. Arbitrum의 경우 각 라운드에 약 7일의 타임아웃이 설정되어 있어, 최악의 경우 분쟁 해결에 수개월이 걸릴 수 있다. 또한 73라운드의 온체인 트랜잭션은 약 500만 가스의 비용을 발생시킨다.")]
                    }),
                    // 5.2.2 기존 해결 방안의 문제점
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.2.2 기존 해결 방안의 문제점")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("기존에 제안된 해결 방안들은 각각 한계점을 가진다. 유동성 브릿지는 제3자의 유동성 제공에 의존하여 추가 수수료가 발생하고, 대규모 자금 이동에는 적합하지 않다. 영지식 롤업으로의 전환은 모든 트랜잭션에 대한 증명 생성 비용이 과도하여 비현실적이다. 다중 증명 시스템(Multi-Prover System)은 복잡성이 높고 아직 연구 단계에 있다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구는 이러한 기존 접근법의 한계를 극복하기 위해, 분쟁이 발생한 경우에만 선택적으로 영지식 증명을 활용하는 하이브리드 접근법을 제안한다.")]
                    }),
                    // 5.3 RVP 패러다임
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.3 RVP 패러다임")]
                    }),
                    // 5.3.1 반응형 유효성 증명 개념
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.3.1 반응형 유효성 증명 개념")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("반응형 유효성 증명(Reactive Validity Proof, RVP)은 본 연구에서 제안하는 새로운 패러다임이다. RVP의 핵심 아이디어는 '증명의 지연 생성(lazy proof generation)'으로, 평상시에는 증명을 생성하지 않고, 분쟁이 발생하여 실제로 필요할 때에만 증명을 생성한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("RVP는 옵티미스틱 롤업과 영지식 롤업의 장점을 선택적으로 결합한다. 정상 운영 시에는 옵티미스틱 롤업과 동일하게 사기 증명 기반으로 동작하여 증명 생성 비용이 전혀 발생하지 않는다. 분쟁 발생 시에만 해당 트랜잭션에 대한 영지식 증명을 생성하여 즉각적인 검증과 분쟁 해결을 수행한다.")]
                    }),
                    // 5.3.2 RVP의 경제적 합리성
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.3.2 RVP의 경제적 합리성")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("RVP의 경제적 합리성은 분쟁 발생 빈도에 기반한다. 실제 옵티미스틱 롤업 운영 데이터에 따르면, 분쟁 발생률은 전체 트랜잭션의 0.001% 미만이다. 이는 시퀀서가 경제적 인센티브에 의해 정직하게 행동하기 때문이다. 부정 행위가 발견될 경우 시퀀서의 예치금이 몰수되므로, 부정 행위의 기대 이익이 음수가 된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("따라서 99.999% 이상의 트랜잭션에 대해서는 영지식 증명이 불필요하며, RVP는 이러한 통계적 특성을 활용하여 증명 생성 비용을 극적으로 절감한다. 분쟁 발생 시에만 증명 비용이 발생하므로, 평균 비용은 영지식 롤업 대비 99.99% 이상 절감된다.")]
                    }),
                    // 5.4 시스템 아키텍처
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.4 시스템 아키텍처")]
                    }),
                    // 5.4.1 ZK 상태 채널 구조
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.4.1 ZK 상태 채널 구조")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("ZK 상태 채널(ZK State Channel)은 분쟁 당사자들이 오프체인에서 이등분 프로토콜을 수행하고, 최종 결과를 영지식 증명으로 검증하는 구조이다. 채널은 분쟁 발생 시 동적으로 생성되며, 분쟁 해결 후 종료된다. 채널 내에서의 모든 상호작용은 양측의 서명으로 인증되어 부인 방지가 보장된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("채널 구조는 세 가지 핵심 컴포넌트로 구성된다. 첫째, 채널 컨트랙트(Channel Contract)는 L1에 배포되어 채널의 개설, 분쟁 제출, 증명 검증을 담당한다. 둘째, 오프체인 이등분 엔진(Off-chain Bisection Engine)은 분쟁 당사자의 로컬 환경에서 이등분 연산을 수행한다. 셋째, ZK 증명 생성기(ZK Proof Generator)는 최종 식별된 명령어의 실행 정확성을 증명한다.")]
                    }),
                    // 5.4.2 분쟁 해결 흐름
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.4.2 분쟁 해결 흐름")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("분쟁 해결 프로세스는 다음 단계로 진행된다. 1단계에서 검증자가 시퀀서의 상태 루트에 이의를 제기하면 ZK 상태 채널이 개설된다. 양측은 분쟁 보증금을 예치하고, 채널 ID가 생성된다. 2단계에서 양측은 오프체인에서 이등분 프로토콜을 수행한다. 각 라운드에서 한 측이 실행 구간을 제시하면, 상대측은 불일치 구간을 지목한다. 이 과정은 단일 명령어가 식별될 때까지 반복된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("3단계에서 단일 명령어가 식별되면, 증명자(분쟁에서 자신이 옳다고 주장하는 측)는 해당 명령어의 실행 정확성에 대한 영지식 증명을 생성한다. 4단계에서 증명이 L1 채널 컨트랙트에 제출되고, 검증 컨트랙트가 증명을 검증한다. 검증 결과에 따라 올바른 측에게 분쟁 보증금이 반환되고, 잘못된 측의 보증금은 몰수된다.")]
                    }),
                    // 5.5 오프체인 이등분 프로토콜
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.5 오프체인 이등분 프로토콜")]
                    }),
                    // 5.5.1 프로토콜 설계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.5.1 프로토콜 설계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("오프체인 이등분 프로토콜은 기존 온체인 이등분 프로토콜의 로직을 오프체인으로 이전한 것이다. 각 라운드에서 현재 실행 구간 [L, R]에 대해, 중간점 M = (L + R) / 2를 기준으로 [L, M]과 [M, R]로 분할한다. 분쟁 당사자들은 각 구간의 종료 상태에 대한 주장을 교환하고, 불일치하는 구간을 선택하여 다음 라운드로 진행한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("온체인 방식과 달리, 오프체인 프로토콜에서는 각 라운드의 데이터가 양측의 서명과 함께 로컬에 저장된다. 상대측이 응답하지 않거나 부정한 데이터를 제출하는 경우, 서명된 이전 상태를 L1에 제출하여 분쟁을 강제 종결할 수 있다.")]
                    }),
                    // 5.5.2 타임아웃 및 예외 처리
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.5.2 타임아웃 및 예외 처리")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("각 이등분 라운드에는 오프체인 타임아웃(기본 10분)이 설정된다. 한 측이 타임아웃 내에 응답하지 않으면, 상대측은 마지막 유효한 서명 상태를 L1에 제출하여 해당 측의 기권(forfeit)을 선언할 수 있다. 기권한 측은 분쟁에서 패배한 것으로 처리되며, 보증금이 몰수된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("네트워크 장애나 클라이언트 오류로 인한 우발적 기권을 방지하기 위해, 온체인에 1시간의 유예 기간(grace period)이 설정된다. 기권 선언이 L1에 제출된 후 유예 기간 내에 해당 측이 유효한 응답을 제출하면 분쟁이 재개된다.")]
                    }),
                    // 5.6 온디맨드 ZK 증명
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.6 온디맨드 ZK 증명")]
                    }),
                    // 5.6.1 단일 명령어 증명 회로
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.6.1 단일 명령어 증명 회로")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("온디맨드 ZK 증명은 단일 EVM 명령어의 실행 정확성을 증명한다. 증명 회로는 입력으로 명령어 실행 전 상태(pre-state), 명령어 opcode, 명령어 실행 후 상태(post-state)를 받는다. 회로는 pre-state에서 해당 opcode를 실행한 결과가 post-state와 일치함을 검증한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("증명 회로는 Circom으로 구현되었으며, Groth16 증명 시스템을 사용한다. EVM의 모든 opcode(약 140개)에 대한 회로가 사전 컴파일되어 있으며, 실제 분쟁에서 필요한 opcode의 회로만 선택적으로 사용된다. 증명 생성 시간은 opcode 복잡도에 따라 5초~30초 범위이다.")]
                    }),
                    // 5.6.2 증명 검증 컨트랙트
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.6.2 증명 검증 컨트랙트")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("증명 검증 컨트랙트는 Solidity로 구현되어 L1에 배포된다. 컨트랙트는 제출된 Groth16 증명을 검증하고, 검증 결과에 따라 분쟁을 판정한다. 페어링 연산(pairing operation)을 활용한 효율적인 검증으로, 증명 검증에 약 200,000 gas가 소요된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("컨트랙트는 각 opcode별로 최적화된 verification key를 저장하고 있으며, 증명 제출 시 해당 opcode의 key를 사용하여 검증을 수행한다. 잘못된 증명이 제출되면 트랜잭션이 revert되고, 제출자의 보증금이 몰수된다.")]
                    }),
                    // 5.7 보안 분석
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.7 보안 분석")]
                    }),
                    // 5.7.1 안전성 증명
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.7.1 안전성 증명")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제안 프로토콜의 안전성(safety)은 다음 정리로 보장된다. 정리 1: 정직한 당사자는 분쟁에서 항상 승리한다. 증명: 이등분 프로토콜은 분쟁 구간을 log2(N) 라운드 내에 단일 명령어로 축소한다. 정직한 당사자의 주장은 실제 실행 결과와 일치하므로, 영지식 증명 검증에서 항상 통과한다. 영지식 증명의 건전성(soundness)에 의해, 부정직한 당사자는 잘못된 실행 결과에 대한 유효한 증명을 생성할 수 없다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("정리 2: 분쟁 해결은 유한 시간 내에 완료된다. 증명: 오프체인 이등분 프로토콜은 최대 73라운드로 제한되며, 각 라운드의 타임아웃은 10분이다. 타임아웃 초과 시 강제 종결 메커니즘이 작동하므로, 최악의 경우에도 약 12시간 이내에 분쟁이 해결된다.")]
                    }),
                    // 5.7.2 공격 시나리오 분석
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.7.2 공격 시나리오 분석")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("프로토콜은 다양한 공격 시나리오에 대해 안전하다. 그리프(grief) 공격에서 악의적 당사자가 무의미한 분쟁을 제기하여 상대방의 자원을 낭비시키려 할 수 있다. 이에 대응하여 분쟁 보증금을 요구하고, 패배한 측의 보증금을 승리한 측에게 보상으로 지급한다. 따라서 그리프 공격의 기대 이익은 음수가 된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("지연 공격(delay attack)에서 악의적 당사자가 각 라운드에서 의도적으로 타임아웃 직전에 응답하여 분쟁 해결을 지연시킬 수 있다. 그러나 최악의 경우에도 총 분쟁 시간은 73 × 10분 + 1시간 ≈ 13시간으로 제한되어, 기존 7일 대비 크게 개선된다.")]
                    }),
                    // 5.8 실험 및 평가
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.8 실험 및 평가")]
                    }),
                    // 5.8.1 실험 환경
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.8.1 실험 환경")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("실험은 AWS c5.4xlarge 인스턴스(16 vCPU, 32GB RAM)에서 수행되었다. ZK 증명 생성에는 snarkjs 라이브러리를 사용하였으며, 증명 회로는 Circom 2.0으로 작성되었다. L1 배포 및 테스트에는 Ethereum Sepolia 테스트넷을 사용하였다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("비교 대상으로 기존 온체인 이등분 프로토콜(Arbitrum 방식)을 구현하여 동일한 분쟁 시나리오에서 비용과 시간을 측정하였다. 테스트 시나리오는 실제 이더리움 트랜잭션에서 추출한 100개의 분쟁 사례를 포함하였다.")]
                    }),
                    // 5.8.2 비용 분석
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.8.2 비용 분석")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("분쟁 해결 비용을 측정한 결과, 제안 프로토콜은 기존 방식 대비 98.4%의 가스 비용 절감을 달성하였다. 기존 온체인 이등분 프로토콜은 평균 5,127,000 gas가 소요되었으며, 가스 가격 50 Gwei 기준 약 $3,942에 해당한다. 제안 프로토콜은 채널 개설에 150,000 gas, 증명 검증에 200,000 gas로 총 350,000 gas가 소요되어 약 $61.34에 해당한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("오프체인 비용은 양측의 연산 자원과 네트워크 대역폭으로 구성된다. 73라운드 이등분에 소요되는 연산 비용은 무시할 수준이며, 데이터 전송량은 라운드당 약 1KB로 총 73KB에 불과하다. ZK 증명 생성에는 약 2GB RAM과 20초의 CPU 시간이 소요된다.")]
                    }),
                    // 5.8.3 시간 분석
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.8.3 시간 분석")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("분쟁 해결 시간을 측정한 결과, 제안 프로토콜은 평균 47분, 최대 2시간 13분의 분쟁 해결 시간을 기록하였다. 이는 기존 7일(10,080분) 대비 99.5%의 시간 단축에 해당한다. 시간 구성은 오프체인 이등분에 평균 35분, ZK 증명 생성에 평균 12분이 소요되었다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("양측이 협력적으로 신속하게 응답하는 경우, 분쟁 해결 시간은 15분 이내로 단축될 수 있다. 반면 한 측이 의도적으로 지연하는 경우에도 타임아웃 메커니즘에 의해 최대 13시간 이내에 해결된다.")]
                    }),
                    // 5.9 3장, 4장 시스템에의 적용
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.9 3장, 4장 시스템에의 적용")]
                    }),
                    // 5.9.1 CBDC 시스템 적용
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.9.1 CBDC 시스템 적용")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제3장의 CBDC 시스템에 하이브리드 프로토콜을 통합하였다. 기존 시스템의 RollupBridge 컨트랙트에 ZK 상태 채널 인터페이스를 추가하고, 분쟁 발생 시 하이브리드 프로토콜을 통해 해결하도록 수정하였다. 통합 후 CBDC 인출 확정 시간은 기존 7일에서 평균 47분으로 단축되었다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("크로스-L2 전송에도 하이브리드 프로토콜이 적용되었다. 분쟁이 발생하지 않는 정상적인 전송은 기존과 동일하게 처리되며, 분쟁 발생 시에만 ZK 상태 채널이 활성화된다. 실험 결과, CBDC 시스템의 정상 운영 비용에는 변화가 없으며, 분쟁 시에만 추가 비용(약 $61)이 발생하는 것으로 확인되었다.")]
                    }),
                    // 5.9.2 분산 스토리지 시스템 적용
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("5.9.2 분산 스토리지 시스템 적용")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제4장의 분산 스토리지 시스템에도 동일한 방식으로 하이브리드 프로토콜을 통합하였다. 저장 증명(Proof of Storage) 분쟁과 인센티브 정산 분쟁에 ZK 상태 채널을 적용하였다. 저장 노드가 잘못된 저장 증명을 제출하는 경우, 하이브리드 프로토콜을 통해 평균 1시간 이내에 분쟁이 해결된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("저장 노드의 보상 인출에도 개선된 확정 시간이 적용된다. 기존에는 7일의 대기 후에만 L1으로 보상을 인출할 수 있었으나, 하이브리드 프로토콜 적용 후에는 분쟁이 없는 경우 즉시, 분쟁이 있는 경우에도 평균 1시간 이내에 인출이 확정된다. 이는 저장 노드 운영자의 유동성을 크게 개선한다.")]
                    }),
                    // 5.10 소결론
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("5.10 소결론")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 장에서는 옵티미스틱 롤업의 7일 확정 지연 문제를 해결하기 위한 ZK 상태 채널 기반 하이브리드 분쟁 프로토콜을 제안하였다. 제안 프로토콜은 반응형 유효성 증명(RVP) 패러다임에 기반하여, 평상시에는 옵티미스틱 방식으로 운영하고 분쟁 시에만 영지식 증명을 활용한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("실험 결과, 제안 프로토콜은 분쟁 해결 시간을 7일에서 평균 47분으로 99.5% 단축하고, 분쟁 비용을 98.4% 절감($3,942 → $61.34)하는 성과를 달성하였다. 제3장의 CBDC 시스템과 제4장의 분산 스토리지 시스템에 통합 적용하여, 두 시스템의 분쟁 해결 한계를 성공적으로 극복하였다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제안 프로토콜은 기존 옵티미스틱 롤업 시스템에 범용적으로 적용 가능하며, 정상 운영 비용의 증가 없이 분쟁 해결 효율만 개선한다는 점에서 실용적 가치가 높다.")]
                    })
                ]
            },
            // ==================== 제 6 장 결론 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                headers: {
                    default: new Header({
                        children: [new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [new TextRun({ text: "제 6 장 결론", size: 20, font: "맑은 고딕" })]
                        })]
                    })
                },
                footers: {
                    default: new Footer({
                        children: [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({ children: [PageNumber.CURRENT], size: 20 })]
                        })]
                    })
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("제 6 장 결론")]
                    }),
                    // 6.1 연구 요약
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("6.1 연구 요약")]
                    }),
                    // 6.1.1 연구 배경 및 목적
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.1.1 연구 배경 및 목적")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구는 블록체인 기술의 확장성 문제를 해결하기 위한 옵티미스틱 롤업의 핵심 한계인 7일 분쟁 해결 지연 문제를 극복하는 것을 목표로 수행되었다. 블록체인은 탈중앙화, 보안성, 확장성이라는 세 가지 속성을 동시에 달성하기 어려운 '블록체인 트릴레마'에 직면해 있으며, 이더리움 메인넷의 경우 초당 15~30건의 트랜잭션만 처리할 수 있어 대규모 상용 서비스에 적용하기 어려운 실정이다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("옵티미스틱 롤업은 트랜잭션을 오프체인에서 실행하고 L1에는 상태 루트만 기록함으로써 처리량을 100배 이상 향상시킬 수 있는 유망한 확장성 솔루션이다. 그러나 분쟁 발생 시 약 7일간의 챌린지 기간이 필요하여 출금 확정이 지연되는 문제가 있다. 본 연구는 이 문제를 해결하기 위해 ZK 상태 채널 기반의 하이브리드 분쟁 해결 프로토콜을 제안하였다.")]
                    }),
                    // 6.1.2 연구 방법 및 결과
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.1.2 연구 방법 및 결과")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구는 총 3편의 연구 논문을 통해 수행되었다. 첫 번째 연구에서는 옵티미스틱 롤업 기반의 중앙은행 디지털 화폐(CBDC) 시스템을 설계하고 구현하였다. 다중 롤업 아키텍처와 배치 처리 메커니즘을 통해 10,483 TPS의 처리량과 95%의 비용 절감을 달성하였으나, 7일 확정 지연이라는 한계가 확인되었다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("두 번째 연구에서는 옵티미스틱 롤업과 IPFS를 결합한 분산 클라우드 스토리지 시스템을 제안하였다. L1-L2-IPFS 3계층 아키텍처를 통해 1GB 파일 저장 비용을 $2,847에서 $0.28로 99.99% 절감하고, 79%의 지연 시간 개선을 달성하였다. 그러나 이 시스템 역시 분쟁 시 7일 지연 문제가 존재하였다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("세 번째 연구에서는 앞선 두 연구의 공통 한계를 해결하기 위한 ZK 상태 채널 기반 하이브리드 분쟁 해결 프로토콜을 제안하였다. RVP(Reactive Validity Proof) 패러다임을 기반으로 오프체인 이등분 프로토콜과 온디맨드 ZK 증명 생성을 결합하여 분쟁 해결 시간을 7일에서 평균 47분으로 99.5% 단축하고, 비용을 $3,942에서 $61.34로 98.4% 절감하였다.")]
                    }),
                    // 6.2 학문적 기여
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("6.2 학문적 기여")]
                    }),
                    // 6.2.1 이론적 기여
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.2.1 이론적 기여")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구의 가장 중요한 이론적 기여는 RVP(Reactive Validity Proof) 패러다임의 제안이다. 기존의 옵티미스틱 롤업은 모든 트랜잭션이 유효하다고 가정하고 문제가 있을 때만 사후적으로 검증하는 '낙관적' 접근을 취하며, ZK 롤업은 모든 트랜잭션에 대해 선제적으로 유효성 증명을 생성한다. RVP는 이 두 접근의 중간 지점을 제안하여, 평상시에는 옵티미스틱 방식으로 운영하되 분쟁이 발생한 특정 명령어에 대해서만 ZK 증명을 생성함으로써 '게으른 증명(lazy proof)' 전략을 구현한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이 패러다임은 게임 이론적으로 합리적인 참여자라면 허위 분쟁을 제기하지 않도록 인센티브 구조를 설계하였다. 정직한 당사자는 항상 증명을 생성하여 승리할 수 있으므로 악의적 당사자가 예치금을 잃게 되며, 이는 악의적 행동에 대한 강력한 억제력으로 작용한다.")]
                    }),
                    // 6.2.2 기술적 기여
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.2.2 기술적 기여")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("기술적 측면에서 본 연구는 세 가지 주요 기여를 제공한다. 첫째, ZK 상태 채널 아키텍처를 설계하여 L1과 L2 사이에 효율적인 분쟁 해결 계층을 구축하였다. 상태 채널 컨트랙트가 분쟁 참여자 간의 예치금을 관리하고, 오프체인 프로토콜의 결과에 따라 최종 정산을 수행한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("둘째, 오프체인 이등분(bisection) 프로토콜을 개선하여 기존 온체인 방식의 73라운드 상호작용을 오프체인에서 수행함으로써 가스 비용을 250배 이상 절감하였다. WebSocket 기반의 P2P 통신을 통해 평균 45초 내에 분쟁 지점을 식별할 수 있으며, 타임아웃 메커니즘을 통해 비협조적 참여자에 대한 자동 패널티가 적용된다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("셋째, 단일 명령어(single instruction) 증명 회로를 설계하여 전체 트랜잭션이 아닌 분쟁 지점의 단일 EVM 명령어에 대해서만 ZK 증명을 생성한다. Groth16 증명 시스템을 사용하여 2분 47초 내에 증명을 생성하고 L1에서 200K gas로 검증할 수 있다.")]
                    }),
                    // 6.2.3 실증적 기여
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.2.3 실증적 기여")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("실증적 측면에서 본 연구는 제안 프로토콜의 실효성을 두 가지 실제 응용 시스템에 적용하여 검증하였다. CBDC 시스템에 적용한 결과, 기존 7일의 출금 확정 지연이 평균 1시간 이내로 단축되어 실시간 지급 결제에 가까운 사용자 경험을 제공할 수 있게 되었다. 분산 스토리지 시스템에서는 저장 노드 보상 인출의 확정 시간이 개선되어 노드 운영자의 유동성이 크게 향상되었다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("이러한 실증적 검증은 제안 프로토콜이 이론적 개념에 그치지 않고 실제 블록체인 응용 서비스의 사용성을 크게 개선할 수 있음을 보여준다. 특히 금융 서비스나 실시간 데이터 처리가 필요한 응용에서 옵티미스틱 롤업의 채택 장벽을 낮추는 데 기여할 수 있다.")]
                    }),
                    // 6.3 연구의 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("6.3 연구의 한계")]
                    }),
                    // 6.3.1 기술적 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.3.1 기술적 한계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구는 몇 가지 기술적 한계를 가지고 있다. 첫째, ZK 증명 생성에 여전히 2분 47초의 시간이 소요되며, 이는 실시간 처리가 필요한 일부 응용에서는 제약이 될 수 있다. 현재 ZK 하드웨어 가속기 기술이 발전하고 있으나 아직 상용화 단계에 이르지 못했다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("둘째, 단일 명령어 증명 회로가 EVM의 모든 opcode를 완전히 지원하지 않는다. 현재 구현은 주요 연산(산술, 비교, 메모리 접근, 스토리지 연산 등)을 지원하지만, 일부 복잡한 precompiled contract 호출에 대한 증명 회로는 추가 개발이 필요하다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("셋째, 오프체인 이등분 프로토콜은 두 참여자 모두가 온라인 상태여야 진행이 가능하다. 참여자가 오프라인인 경우 타임아웃까지 대기해야 하며, 이는 악의적 참여자가 의도적으로 프로세스를 지연시킬 수 있는 여지를 남긴다.")]
                    }),
                    // 6.3.2 실험적 한계
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.3.2 실험적 한계")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("실험적 측면에서도 한계가 존재한다. 본 연구의 실험은 Sepolia 테스트넷에서 수행되었으며, 메인넷 환경에서의 성능은 네트워크 혼잡도에 따라 달라질 수 있다. 또한 분쟁 시나리오 실험은 시뮬레이션된 환경에서 수행되었으며, 실제 악의적 공격자의 다양한 전략에 대한 검증은 추가적인 연구가 필요하다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("CBDC와 분산 스토리지 시스템에 대한 적용 검증도 제한된 규모의 테스트베드에서 수행되었다. 대규모 상용 환경에서의 안정성과 성능에 대한 추가 검증이 필요하며, 특히 다수의 동시 분쟁이 발생하는 상황에서의 시스템 동작에 대한 실험이 추가되어야 한다.")]
                    }),
                    // 6.4 향후 연구 방향
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("6.4 향후 연구 방향")]
                    }),
                    // 6.4.1 기술 고도화
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.4.1 기술 고도화")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("향후 연구에서는 먼저 ZK 증명 생성 성능을 개선할 계획이다. GPU 가속을 활용한 증명 생성, 증명 집계(proof aggregation) 기술, 그리고 FPGA/ASIC 기반 하드웨어 가속기 활용을 통해 증명 생성 시간을 현재 2분 47초에서 30초 이내로 단축하는 것을 목표로 한다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("또한 단일 명령어 증명 회로를 확장하여 EVM의 모든 opcode와 precompiled contract를 완전히 지원하는 범용 ZK-EVM을 개발할 계획이다. 이를 통해 임의의 스마트 컨트랙트 실행에 대한 분쟁 해결이 가능해진다.")]
                    }),
                    // 6.4.2 응용 분야 확장
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.4.2 응용 분야 확장")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("제안 프로토콜은 CBDC와 분산 스토리지 외에도 다양한 블록체인 응용 분야에 적용될 수 있다. 탈중앙화 금융(DeFi) 프로토콜, NFT 마켓플레이스, 게임 아이템 거래, 공급망 관리 시스템 등에서 즉각적인 트랜잭션 확정이 필요한 경우 본 프로토콜을 적용하여 사용자 경험을 개선할 수 있다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("특히 크로스체인 브릿지에 본 프로토콜을 적용하면 기존 7일의 출금 지연 없이 빠른 자산 이동이 가능해진다. 이는 다중 체인 환경에서의 유동성 효율성을 크게 향상시킬 수 있다.")]
                    }),
                    // 6.4.3 표준화 및 생태계 기여
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [new TextRun("6.4.3 표준화 및 생태계 기여")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("향후 제안 프로토콜을 EIP(Ethereum Improvement Proposal)로 표준화하여 이더리움 생태계에 기여할 계획이다. 또한 오픈소스로 구현체를 공개하여 다른 옵티미스틱 롤업 프로젝트들이 채택할 수 있도록 할 예정이다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("나아가 본 연구에서 제안한 RVP 패러다임을 다른 블록체인 확장성 솔루션에도 적용하여, 보안성과 효율성 사이의 최적 균형점을 찾는 연구를 지속할 계획이다. 이를 통해 블록체인 기술의 대중화에 기여하고자 한다.")]
                    }),
                    // 6.5 맺음말
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("6.5 맺음말")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("본 연구는 옵티미스틱 롤업의 7일 분쟁 해결 지연이라는 핵심 한계를 ZK 상태 채널 기반 하이브리드 프로토콜을 통해 극복하였다. CBDC와 분산 스토리지라는 두 가지 실제 응용 시스템을 통해 옵티미스틱 롤업의 확장성 이점을 확인하고, 동시에 그 한계를 명확히 식별하였다. 이를 바탕으로 RVP 패러다임과 하이브리드 분쟁 해결 프로토콜을 제안하여 분쟁 해결 시간을 99.5%, 비용을 98.4% 절감하는 성과를 달성하였다.")]
                    }),
                    new Paragraph({
                        style: "BodyText",
                        children: [new TextRun("블록체인 기술은 탈중앙화된 신뢰를 제공하는 혁신적인 기술이나, 확장성 문제로 인해 대중적 채택에 한계가 있었다. 본 연구의 기여가 블록체인 확장성 솔루션의 실용성을 높이고, 궁극적으로 블록체인 기술의 광범위한 채택에 기여할 수 있기를 기대한다.")]
                    })
                ]
            },
            // ==================== 참고문헌 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("참고문헌")]
                    }),
                    new Paragraph({ spacing: { before: 400 }, children: [] }),
                    // 블록체인 기초
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[1] ", bold: true }), new TextRun("S. Nakamoto, \"Bitcoin: A Peer-to-Peer Electronic Cash System,\" 2008.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[2] ", bold: true }), new TextRun("V. Buterin, \"Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform,\" 2014.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[3] ", bold: true }), new TextRun("G. Wood, \"Ethereum: A Secure Decentralised Generalised Transaction Ledger,\" Ethereum Project Yellow Paper, vol. 151, 2014.")]
                    }),
                    // 확장성 및 트릴레마
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[4] ", bold: true }), new TextRun("V. Buterin, \"The Scalability Trilemma,\" Ethereum Foundation Blog, 2017.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[5] ", bold: true }), new TextRun("K. Croman et al., \"On Scaling Decentralized Blockchains,\" in Proc. 3rd Workshop on Bitcoin and Blockchain Research, 2016.")]
                    }),
                    // 롤업 및 Layer 2
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[6] ", bold: true }), new TextRun("Optimism Team, \"Optimistic Rollups,\" Ethereum Research, 2019.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[7] ", bold: true }), new TextRun("Arbitrum Team, \"Arbitrum Nitro: A Second-Generation Optimistic Rollup,\" Offchain Labs, 2022.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[8] ", bold: true }), new TextRun("J. Teutsch and C. Reitwießner, \"A Scalable Verification Solution for Blockchains,\" arXiv:1908.04756, 2019.")]
                    }),
                    // 영지식 증명
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[9] ", bold: true }), new TextRun("E. Ben-Sasson et al., \"Zerocash: Decentralized Anonymous Payments from Bitcoin,\" in Proc. IEEE S&P, 2014.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[10] ", bold: true }), new TextRun("J. Groth, \"On the Size of Pairing-Based Non-interactive Arguments,\" in Proc. EUROCRYPT, 2016.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[11] ", bold: true }), new TextRun("E. Ben-Sasson et al., \"Scalable, Transparent, and Post-Quantum Secure Computational Integrity,\" IACR Cryptology ePrint Archive, 2018.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[12] ", bold: true }), new TextRun("zkSync Team, \"zkSync 2.0: zkEVM,\" Matter Labs, 2022.")]
                    }),
                    // 상태 채널
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[13] ", bold: true }), new TextRun("J. Poon and T. Dryja, \"The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments,\" 2016.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[14] ", bold: true }), new TextRun("S. Dziembowski et al., \"Perun: Virtual Payment Hubs over Cryptocurrencies,\" in Proc. IEEE S&P, 2019.")]
                    }),
                    // CBDC
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[15] ", bold: true }), new TextRun("Bank for International Settlements, \"Central Bank Digital Currencies: Foundational Principles and Core Features,\" BIS Report, 2020.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[16] ", bold: true }), new TextRun("M. Auer and R. Böhme, \"The Technology of Retail Central Bank Digital Currency,\" BIS Quarterly Review, 2020.")]
                    }),
                    // 분산 스토리지
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[17] ", bold: true }), new TextRun("J. Benet, \"IPFS - Content Addressed, Versioned, P2P File System,\" arXiv:1407.3561, 2014.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[18] ", bold: true }), new TextRun("Protocol Labs, \"Filecoin: A Decentralized Storage Network,\" 2017.")]
                    }),
                    // 저자 논문
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[19] ", bold: true }), new TextRun("황재승, 김영한, \"계층2 블록체인 기반 중앙은행 디지털 화폐 시스템,\" 한국정보처리학회논문지, 2024.")]
                    }),
                    new Paragraph({
                        spacing: { before: 200 },
                        children: [new TextRun({ text: "[20] ", bold: true }), new TextRun("황재승, 김영한, \"옵티미스틱 롤업을 활용한 블록체인 기반 분산 클라우드 스토리지 시스템,\" 한국정보처리학회논문지, 2024.")]
                    })
                ]
            },
            // ==================== 영문 초록 ====================
            {
                properties: {
                    page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [new TextRun("Abstract")]
                    }),
                    new Paragraph({ spacing: { before: 400 }, children: [] }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 400 },
                        children: [new TextRun({ text: "Design and Application of a Hybrid Protocol for Overcoming Dispute Resolution Delays in Optimistic Rollups", size: 26, bold: true, font: "Times New Roman" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 600 },
                        children: [new TextRun({ text: "Jae-seung Hwang", size: 24, font: "Times New Roman" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                        children: [new TextRun({ text: "Department of Computer Science", size: 22, font: "Times New Roman" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                        children: [new TextRun({ text: "Graduate School of Soongsil University", size: 22, font: "Times New Roman" })]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 400 },
                        children: [new TextRun({ text: "Advisor: Prof. Young-Han Kim", size: 22, font: "Times New Roman" })]
                    }),
                    new Paragraph({ spacing: { before: 200 }, children: [] }),
                    new Paragraph({
                        style: "Abstract",
                        children: [new TextRun({ text: "Blockchain technology provides decentralized trust but faces scalability limitations for large-scale commercial adoption. Optimistic rollups can improve throughput by over 100x by executing transactions off-chain, but have a fundamental limitation requiring approximately 7 days of challenge period when disputes arise. This study proposes a hybrid dispute resolution protocol based on ZK state channels to address this problem.", font: "Times New Roman" })]
                    }),
                    new Paragraph({
                        style: "Abstract",
                        children: [new TextRun({ text: "First, we designed an optimistic rollup-based CBDC system that achieved 10,483 TPS and 95% cost reduction, but confirmed the 7-day finality delay problem. Subsequently, we implemented a distributed storage system combining optimistic rollup with IPFS, achieving 99.99% cost reduction, yet the same delay issue persisted.", font: "Times New Roman" })]
                    }),
                    new Paragraph({
                        style: "Abstract",
                        children: [new TextRun({ text: "To solve this, we propose the RVP (Reactive Validity Proof) paradigm. This is a 'lazy proof' strategy that operates optimistically under normal conditions but generates ZK proofs only for disputed instructions when disputes occur. The off-chain bisection protocol rapidly identifies dispute points, and single-instruction ZK proofs perform final adjudication.", font: "Times New Roman" })]
                    }),
                    new Paragraph({
                        style: "Abstract",
                        children: [new TextRun({ text: "Experimental results show that the proposed protocol reduces dispute resolution time from 7 days to an average of 47 minutes (99.5% reduction) and costs from $3,942 to $61.34 (98.4% reduction). When applied to CBDC and distributed storage systems, withdrawal finality improved to within 1 hour on average, enabling user experiences close to real-time services.", font: "Times New Roman" })]
                    }),
                    new Paragraph({ spacing: { before: 600 }, children: [] }),
                    new Paragraph({
                        children: [new TextRun({ text: "Keywords: ", bold: true, size: 22, font: "Times New Roman" }), new TextRun({ text: "Optimistic Rollup, ZK Proof, State Channel, Blockchain Scalability, CBDC, Distributed Storage", size: 22, font: "Times New Roman" })]
                    })
                ]
            }
        ]
    });

    // Save the document
    const outputPath = path.join(__dirname, 'dissertation-template-v2.docx');
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(outputPath, buffer);
    console.log('Dissertation template created successfully:', outputPath);
}

createDissertation().catch(console.error);
