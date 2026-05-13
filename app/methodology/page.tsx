'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const pointAllocations = [
  { q: 'Q1 Texture', res: 'Light & crispy', pts: '+3' },
  { q: 'Q1 Texture', res: 'Needs force to bite', pts: '−1' },
  { q: 'Q1 Texture', res: 'Powdery', pts: '−1.5' },
  { q: 'Q1 Texture', res: 'Soft / dough-like', pts: '−2' },
  { q: 'Q3 Mouthfeel', res: 'Clean', pts: '+3' },
  { q: 'Q3 Mouthfeel', res: 'Slightly oily', pts: '−0.5' },
  { q: 'Q3 Mouthfeel', res: 'Oily / greasy', pts: '−2' },
  { q: 'Q3 Mouthfeel', res: 'Bitter / metallic', pts: '−2' },
  { q: 'Q3 Mouthfeel', res: 'Dryness', pts: '−1' },
  { q: 'Q4 Quantity comfort', res: 'Very comfortable', pts: '+3' },
  { q: 'Q4 Quantity comfort', res: 'Okay for small pack', pts: '+1' },
  { q: 'Q4 Quantity comfort', res: 'Would avoid', pts: '−2' },
  { q: 'Q5 Confidence', res: 'Very sure', pts: '×1.0' },
  { q: 'Q5 Confidence', res: 'Somewhat sure', pts: '×0.8' },
  { q: 'Q5 Confidence', res: 'Not sure', pts: '×0.3' },
  { q: 'Q6 Most liked', res: 'Selected', pts: '+5' },
  { q: 'Q7 Least liked', res: 'Selected', pts: '−4' },
  { q: 'Q9 Oiliness', res: 'Scale 1–5', pts: '+4/value' },
  { q: 'Q9 Oiliness', res: 'Scale 6–10', pts: '−value/3' },
  { q: 'Q10A Frequent eat', res: 'Selected', pts: '+4' },
  { q: 'Q10B Binge eat', res: 'Selected', pts: '+4' },
  { q: 'Q11 Channel', res: 'Walk to shop', pts: '+5' },
  { q: 'Q11 Channel', res: 'Buy from vending', pts: '−2' },
  { q: 'Q11 Channel', res: 'Skip buying', pts: '+1' },
  { q: 'Q12A Price +25%', res: 'Still buy preferred', pts: '+3' },
  { q: 'Q12A Price +25%', res: 'Buy second-preferred', pts: '−1' },
  { q: 'Q12B Pack size', res: 'Buy bigger pack', pts: '+4' },
  { q: 'Q12B Pack size', res: 'Buy smaller of second', pts: '−1' },
  { q: 'Q14 C&O Affinity', res: 'Like a lot', pts: '×1.1' },
  { q: 'Q14 C&O Affinity', res: 'Like', pts: '×1.0' },
  { q: 'Q14 C&O Affinity', res: 'Neutral', pts: '×0.7' },
  { q: 'Q14 C&O Affinity', res: 'Usually avoid', pts: '×0.5' },
  { q: 'Q14 C&O Affinity', res: 'Do not like', pts: '×0.3' },
  { q: 'Q15 Honesty', res: 'Yes', pts: '×1.0' },
  { q: 'Q15 Honesty', res: 'Somewhat', pts: '×0.8' },
  { q: 'Q15 Honesty', res: 'Not really', pts: '×0.5' },
]

export default function MethodologyPage() {
  return (
    <PortalLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Scoring Methodology</h1>
          <p className="text-gray-600 mt-2">The proprietary algorithms behind the LOGIQ Stickiness Score.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Formula */}
          <div className="space-y-6">
            <Card className="border-slate-200/80 bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 rounded-t-xl">
                <CardTitle className="text-lg text-slate-900">1. Base Sample Score</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <pre className="text-sm font-mono whitespace-pre-wrap text-indigo-900 bg-indigo-50/50 p-4 rounded-lg border border-indigo-100">
{`Base Sample Score =
  Q1 (texture)
+ Q3 (mouthfeel)
+ Q4 (quantity comfort)
+ Q6 (most liked +5)
+ Q7 (least liked −4)
+ Q9 (oiliness penalty)
+ Q10A (frequent eat)
+ Q10B (binge eat)`}
                </pre>
              </CardContent>
            </Card>

            <Card className="border-slate-200/80 bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 rounded-t-xl">
                <CardTitle className="text-lg text-slate-900">2. Final Sample Score</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <pre className="text-sm font-mono whitespace-pre-wrap text-indigo-900 bg-indigo-50/50 p-4 rounded-lg border border-indigo-100">
{`Final Sample Score =
  Base Score
× Q5 (confidence)
× Q14 (C&O affinity)
× Q15 (honesty)`}
                </pre>
              </CardContent>
            </Card>

            <Card className="border-slate-200/80 bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 rounded-t-xl">
                <CardTitle className="text-lg text-slate-900">3. Stickiness Score</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <pre className="text-sm font-mono whitespace-pre-wrap text-emerald-900 bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
{`Stickiness Score =
  Q11 (channel substitution)
+ Q12A (price sensitivity)
+ Q12B (pack size)`}
                </pre>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Table */}
          <div>
            <Card className="border-slate-200/80 bg-white h-full max-h-[800px] flex flex-col">
              <CardHeader className="bg-slate-50 border-b border-slate-100 rounded-t-xl">
                <CardTitle className="text-lg text-slate-900">Point Allocation Reference</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-white shadow-sm z-10">
                    <TableRow>
                      <TableHead className="font-semibold text-slate-900">Question</TableHead>
                      <TableHead className="font-semibold text-slate-900">Response</TableHead>
                      <TableHead className="font-semibold text-slate-900 text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pointAllocations.map((row, idx) => (
                      <TableRow key={idx} className="hover:bg-slate-50/50">
                        <TableCell className="font-medium text-slate-700 py-2">{row.q}</TableCell>
                        <TableCell className="text-slate-600 py-2">{row.res}</TableCell>
                        <TableCell className="text-right font-mono font-medium text-indigo-600 py-2">
                          {row.pts}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
