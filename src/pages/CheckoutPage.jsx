import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Stepper from "../components/checkout/Stepper";
import OrderSummaryCard from "../components/checkout/OrderSummaryCard";
import Step1Package from "../components/checkout/Step1Package";
import Step2Info from "../components/checkout/Step2Info";
import Step3Terms from "../components/checkout/Step3Terms";
import Step4Payment from "../components/checkout/Step4Payment";
import Step5Confirm from "../components/checkout/Step5Confirm";
import { isSelectionValid } from "../lib/pricing";
import { isStep2Valid } from "../lib/validation";

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [forceShowErrors, setForceShowErrors] = useState(false);

  const [selection, setSelection] = useState({
    mode: "bundle",
    chapterCount: 7,
    addons: { p: false, m: false, c: false },
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    telegram: "",
    address: "",
  });
  const [terms, setTerms] = useState({ readTerms: false, riskAware: false });
  const [paymentMethodId, setPaymentMethodId] = useState(null);

  // Preselect a package if the user arrived via ?package=bundle or ?package=chapter-N
  useEffect(() => {
    const pkg = searchParams.get("package");
    if (!pkg) return;
    if (pkg === "bundle") {
      setSelection((s) => ({ ...s, mode: "bundle" }));
    } else if (pkg.startsWith("chapter-")) {
      const num = parseInt(pkg.replace("chapter-", ""), 10);
      if (Number.isFinite(num) && num >= 1 && num <= 7) {
        setSelection((s) => ({ ...s, mode: "chapters", chapterCount: num }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  function canProceed() {
    if (step === 1) return isSelectionValid(selection);
    if (step === 2) return isStep2Valid(userInfo);
    if (step === 3) return terms.readTerms && terms.riskAware;
    if (step === 4) return Boolean(paymentMethodId);
    return true;
  }

  function handleNext() {
    if (!canProceed()) {
      setForceShowErrors(true);
      return;
    }
    setForceShowErrors(false);
    setStep((s) => Math.min(s + 1, 5));
  }

  function handleBack() {
    setForceShowErrors(false);
    setStep((s) => Math.max(s - 1, 1));
  }

  return (
    <section className="py-12 sm:py-16 min-h-[70vh]">
      <Container>
        <Stepper current={step} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 max-w-4xl mx-auto items-start">
          <div className="min-w-0">
            {step === 1 && <Step1Package selection={selection} setSelection={setSelection} />}
            {step === 2 && (
              <Step2Info userInfo={userInfo} setUserInfo={setUserInfo} forceShowErrors={forceShowErrors} />
            )}
            {step === 3 && <Step3Terms terms={terms} setTerms={setTerms} forceShowErrors={forceShowErrors} />}
            {step === 4 && (
              <Step4Payment
                selection={selection}
                paymentMethodId={paymentMethodId}
                setPaymentMethodId={setPaymentMethodId}
                forceShowErrors={forceShowErrors}
              />
            )}
            {step === 5 && (
              <Step5Confirm selection={selection} userInfo={userInfo} paymentMethodId={paymentMethodId} />
            )}

            <div className="mt-9 flex items-center justify-between gap-4">
              {step > 1 ? (
                <Button variant="ghost" onClick={handleBack} icon={ArrowLeft} iconPosition="left">
                  Back
                </Button>
              ) : (
                <span />
              )}
              {step < 5 && (
                <Button variant="primary" onClick={handleNext} icon={ArrowRight}>
                  Next
                </Button>
              )}
            </div>
          </div>

          {step < 5 && (
            <div className="hidden lg:block">
              <OrderSummaryCard selection={selection} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
