import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-brand-bg-soft selection:bg-brand-accent/20 selection:text-brand-primary">
      <Navbar />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6 md:px-10 font-sans text-brand-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary">
              개인정보 처리방침
            </h1>
            <p className="text-brand-primary/60 text-sm">
              키온랩스 홈페이지(kionlabs.vercel.app) 개인정보 처리방침입니다.
            </p>
          </header>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-primary/5 space-y-10 text-sm md:text-base leading-relaxed text-brand-primary/80">
            {/* 제1조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제1조 (총칙)
              </h2>
              <p className="mb-2">
                키온랩스(이하 "회사")는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
              </p>
              <p>
                이 개인정보 처리방침은 회사가 운영하는 키온랩스 홈페이지(kionlabs.vercel.app)(이하 "서비스")에 적용됩니다.
              </p>
            </section>

            {/* 제2조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제2조 (개인정보의 처리 목적)
              </h2>
              <p className="mb-3">
                회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <div className="bg-brand-bg-soft/50 p-4 rounded-xl border border-brand-primary/5">
                <h3 className="font-semibold text-brand-primary mb-1">1. 문의·상담 응대</h3>
                <p className="text-sm text-brand-primary/70">
                  문의사항 접수·확인, 사실 확인을 위한 연락·통지, 처리 결과 통보를 목적으로 개인정보를 처리합니다.
                </p>
              </div>
            </section>

            {/* 제3조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제3조 (처리하는 개인정보의 항목)
              </h2>
              <p className="mb-3">
                ① 회사는 다음의 개인정보 항목을 처리하고 있습니다.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><span className="font-semibold text-brand-primary">수집 항목:</span> 이름, 이메일, 휴대전화번호</li>
                <li><span className="font-semibold text-brand-primary">서비스 이용 과정에서 자동 수집 항목:</span> IP 주소, 쿠키, 서비스 이용 기록</li>
              </ul>
            </section>

            {/* 제4조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제4조 (개인정보의 처리 및 보유 기간)
              </h2>
              <p className="mb-2">
                ① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <p className="mb-3">
                ② 개인정보의 처리 및 보유 기간은 다음과 같습니다.
              </p>
              <ul className="list-disc list-inside pl-2">
                <li><span className="font-semibold text-brand-primary">보유 기간:</span> 개인정보의 수집·이용 목적 달성 시까지</li>
              </ul>
            </section>

            {/* 제5조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제5조 (개인정보의 제3자 제공)
              </h2>
              <p className="mb-2">
                ① 회사는 정보주체의 개인정보를 제2조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              </p>
              <p>
                ② 회사는 현재 정보주체의 개인정보를 제3자에게 제공하고 있지 않습니다.
              </p>
            </section>

            {/* 제6조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제6조 (개인정보 처리의 위탁)
              </h2>
              <p className="mb-3">
                ① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
              </p>
              <div className="bg-brand-bg-soft/50 p-4 rounded-xl border border-brand-primary/5 mb-3">
                <p><span className="font-semibold text-brand-primary">수탁자:</span> Supabase</p>
                <p><span className="font-semibold text-brand-primary">위탁 업무:</span> 문의 내용 저장</p>
              </div>
              <p className="mb-2">
                ② 회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
              </p>
              <p>
                ③ 위탁 업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하겠습니다.
              </p>
            </section>

            {/* 제7조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제7조 (개인정보의 파기 절차 및 방법)
              </h2>
              <p className="mb-2">
                ① 회사는 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
              </p>
              <p className="mb-2">
                ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리 목적이 달성되었음에도 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여 보존합니다.
              </p>
              <p className="mb-3">
                ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <span className="font-semibold text-brand-primary">파기 절차:</span> 회사는 파기 사유가 발생한 개인정보를 선정하고, 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                </li>
                <li>
                  <span className="font-semibold text-brand-primary">파기 방법:</span> 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
                </li>
              </ul>
            </section>

            {/* 제8조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제8조 (정보주체와 법정대리인의 권리·의무 및 행사방법)
              </h2>
              <p className="mb-2">
                ① 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
              </p>
              <p className="mb-2">
                ② 제1항에 따른 권리 행사는 회사에 대해 「개인정보 보호법 시행령」 제41조 제1항에 따라 서면, 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
              </p>
              <p className="mb-2">
                ③ 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 「개인정보 처리 방법에 관한 고시」 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
              </p>
              <p className="mb-2">
                ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.
              </p>
              <p>
                ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
              </p>
            </section>

            {/* 제9조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제9조 (개인정보의 안전성 확보조치)
              </h2>
              <p className="mb-3">
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li><span className="font-semibold text-brand-primary">관리적 조치:</span> 내부관리계획 수립·시행, 개인정보 취급자 최소화 및 정기 교육</li>
                <li><span className="font-semibold text-brand-primary">기술적 조치:</span> 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화, 보안프로그램 설치·갱신</li>
                <li><span className="font-semibold text-brand-primary">물리적 조치:</span> 전산실·자료보관실 등의 접근통제</li>
              </ol>
            </section>

            {/* 제10조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제10조 (개인정보 자동 수집 장치의 설치·운영 및 거부)
              </h2>
              <p className="mb-2">
                ① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 "쿠키(cookie)"를 사용합니다.
              </p>
              <p className="mb-2">
                ② 쿠키는 웹사이트를 운영하는 데 이용되는 서버가 이용자의 브라우저에 보내는 소량의 정보이며, 이용자의 컴퓨터 또는 모바일 기기에 저장됩니다.
              </p>
              <p>
                ③ 정보주체는 웹 브라우저의 옵션 설정을 통해 쿠키 허용·차단 등을 지정할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 발생할 수 있습니다.
              </p>
            </section>

            {/* 제11조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제11조 (개인정보 보호책임자)
              </h2>
              <p className="mb-4">
                ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>

              <div className="bg-brand-bg-soft/60 p-6 rounded-xl border border-brand-primary/10 space-y-2">
                <h3 className="font-bold text-brand-primary mb-2">▶ 개인정보 보호책임자</h3>
                <p><span className="font-medium text-brand-primary">성명:</span> 윤창진</p>
                <p><span className="font-medium text-brand-primary">직책:</span> 대표</p>
                <p><span className="font-medium text-brand-primary">사업자 등록번호:</span> 531-42-01798</p>
                <p><span className="font-medium text-brand-primary">이메일:</span> kionlabs@gmail.com</p>
                <p><span className="font-medium text-brand-primary">전화:</span> 010-5608-8008</p>
              </div>

              <p className="mt-4">
                ② 정보주체는 서비스를 이용하면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변·처리해 드리겠습니다.
              </p>
            </section>

            {/* 제12조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제12조 (권익침해 구제방법)
              </h2>
              <p className="mb-3">
                정보주체는 개인정보 침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁 해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보 침해의 신고·상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li><span className="font-semibold text-brand-primary">개인정보분쟁조정위원회:</span> (국번없이) 1833-6972 (<a href="https://www.kopico.go.kr" target="_blank" rel="noreferrer" className="underline hover:text-brand-accent">www.kopico.go.kr</a>)</li>
                <li><span className="font-semibold text-brand-primary">개인정보침해신고센터:</span> (국번없이) 118 (<a href="https://privacy.kisa.or.kr" target="_blank" rel="noreferrer" className="underline hover:text-brand-accent">privacy.kisa.or.kr</a>)</li>
                <li><span className="font-semibold text-brand-primary">대검찰청:</span> (국번없이) 1301 (<a href="https://www.spo.go.kr" target="_blank" rel="noreferrer" className="underline hover:text-brand-accent">www.spo.go.kr</a>)</li>
                <li><span className="font-semibold text-brand-primary">경찰청:</span> (국번없이) 182 (<a href="https://ecrm.police.go.kr" target="_blank" rel="noreferrer" className="underline hover:text-brand-accent">ecrm.police.go.kr</a>)</li>
              </ol>
            </section>

            {/* 제13조 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-3">
                제13조 (개인정보 처리방침의 변경)
              </h2>
              <p className="mb-2">
                ① 이 개인정보 처리방침은 2026년 5월 18일부터 적용됩니다.
              </p>
              <p>
                ② 개인정보 처리방침의 내용 추가, 삭제 및 수정이 있을 경우에는 변경 사항의 시행 7일 전부터 서비스 내 공지사항 등을 통하여 고지하겠습니다.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
