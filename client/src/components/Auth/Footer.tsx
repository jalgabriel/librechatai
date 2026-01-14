import { useLocalize } from '~/hooks';
import { TStartupConfig } from 'librechat-data-provider';

function Footer({ startupConfig }: { startupConfig: TStartupConfig | null | undefined }) {
  const localize = useLocalize();
  if (!startupConfig) {
    return null;
  }
  const privacyPolicy = startupConfig.interface?.privacyPolicy;
  const termsOfService = startupConfig.interface?.termsOfService;

  const privacyPolicyRender = privacyPolicy?.externalUrl && (
    <a
      className="text-sm text-amber-600 underline decoration-transparent transition-all duration-200 hover:text-amber-700 hover:decoration-amber-700 focus:text-amber-700 focus:decoration-amber-700 dark:text-green-500 dark:hover:text-amber-400 dark:hover:decoration-amber-400 dark:focus:text-amber-400 dark:focus:decoration-amber-400"
      href={privacyPolicy.externalUrl}
      // Removed for WCAG compliance
      // target={privacyPolicy.openNewTab ? '_blank' : undefined}
      rel="noreferrer"
    >
      {localize('com_ui_privacy_policy')}
    </a>
  );

  const termsOfServiceRender = termsOfService?.externalUrl && (
    <a
      className="text-sm text-amber-600 underline decoration-transparent transition-all duration-200 hover:text-amber-700 hover:decoration-amber-700 focus:text-amber-700 focus:decoration-amber-700 dark:text-amber-500 dark:hover:text-amber-400 dark:hover:decoration-amber-400 dark:focus:text-amber-400 dark:focus:decoration-amber-400"
      href={termsOfService.externalUrl}
      // Removed for WCAG compliance
      // target={termsOfService.openNewTab ? '_blank' : undefined}
      rel="noreferrer"
    >
      {localize('com_ui_terms_of_service')}
    </a>
  );

  return (
    <div className="align-end m-4 flex justify-center gap-2" role="contentinfo">
      {privacyPolicyRender}
      {privacyPolicyRender && termsOfServiceRender && (
        <div className="border-r-[1px] border-amber-300 dark:border-amber-600" />
      )}
      {termsOfServiceRender}
    </div>
  );
}

export default Footer;
