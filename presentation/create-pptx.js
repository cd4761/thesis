const pptxgen = require('pptxgenjs');
const path = require('path');

// Import html2pptx from the skill directory
const html2pptx = require('C:/Users/cd476/.claude/skills/pptx/scripts/html2pptx.js');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Jae-seung Hwang';
    pptx.title = '옵티미스틱 롤업의 분쟁 해결 지연 문제 극복을 위한 하이브리드 프로토콜 설계 및 응용';
    pptx.subject = '박사학위 청구논문';
    pptx.company = '숭실대학교';

    const slidesDir = path.join(__dirname, 'slides');

    const slideFiles = [
        'slide01-cover.html',
        'slide02-toc.html',
        'slide03-background.html',
        'slide04-problem.html',
        'slide05-contribution.html',
        'slide06-related.html',
        'slide07-cbdc-overview.html',
        'slide08-cbdc-arch.html',
        'slide09-cbdc-result.html',
        'slide10-storage-overview.html',
        'slide11-storage-arch.html',
        'slide12-storage-result.html',
        'slide13-problem-statement.html',
        'slide14-rvp.html',
        'slide15-bisection.html',
        'slide16-zk-proof.html',
        'slide17-paper3-result.html',
        'slide18-integration.html',
        'slide19-contribution.html',
        'slide20-future.html',
        'slide21-conclusion.html',
        'slide22-thanks.html'
    ];

    console.log('Creating presentation with', slideFiles.length, 'slides...');

    for (let i = 0; i < slideFiles.length; i++) {
        const slideFile = slideFiles[i];
        const slidePath = path.join(slidesDir, slideFile);
        console.log(`Processing slide ${i + 1}/${slideFiles.length}: ${slideFile}`);

        try {
            const { slide, placeholders } = await html2pptx(slidePath, pptx);

            // Add chart for CBDC result slide (slide 9)
            if (slideFile === 'slide09-cbdc-result.html' && placeholders.length > 0) {
                slide.addChart(pptx.charts.LINE, [{
                    name: 'TPS',
                    labels: ['1', '5', '10', '15'],
                    values: [698, 3484, 6989, 10483]
                }], {
                    x: 0.5,
                    y: 1.5,
                    w: 4.5,
                    h: 3,
                    showTitle: true,
                    title: 'L2 노드 수에 따른 TPS',
                    titleFontSize: 12,
                    showLegend: false,
                    lineSize: 3,
                    lineSmooth: true,
                    showCatAxisTitle: true,
                    catAxisTitle: 'L2 노드 수',
                    showValAxisTitle: true,
                    valAxisTitle: 'TPS',
                    valAxisMinVal: 0,
                    valAxisMaxVal: 12000,
                    chartColors: ['17A2B8']
                });
            }
        } catch (error) {
            console.error(`Error processing ${slideFile}:`, error.message);
        }
    }

    const outputPath = path.join(__dirname, 'dissertation-defense.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log('\nPresentation created successfully:', outputPath);
}

createPresentation().catch(console.error);
