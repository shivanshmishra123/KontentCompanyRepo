$cssFile = "c:\Users\13shi\Desktop\Kontent Company Exp new\src\index.css"
$css = Get-Content $cssFile -Raw -Encoding UTF8

$newRules = @"

  /* Three-tab switcher */
  .work-tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 3.5rem;
    border-radius: 999px;
    padding: 0.35rem;
    width: fit-content;
    position: relative;
    background: rgba(255, 231, 208, 0.05);
    border: 1px solid rgba(255, 231, 208, 0.08);
  }

  .work-tabs__pill {
    position: absolute;
    top: 0.35rem;
    height: calc(100% - 0.7rem);
    border-radius: 999px;
    pointer-events: none;
    z-index: 1;
    background: #FC6E20;
    box-shadow: 0 4px 18px rgba(252, 110, 32, 0.40);
    transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
                width    0.38s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .work-tabs__btn {
    position: relative;
    z-index: 2;
    font-size: 0.92rem;
    font-weight: 500;
    background: transparent;
    border: none;
    border-radius: 999px;
    padding: 0.65rem 2rem;
    cursor: pointer;
    letter-spacing: 0.01em;
    font-family: var(--font-display);
    color: rgba(255, 231, 208, 0.55);
    -webkit-tap-highlight-color: transparent;
    transition: color 0.3s ease;
    white-space: nowrap;
  }

  .work-tabs__btn--active {
    color: #1B1B1B;
  }

  /* Panel fade + slide */
  .work-panels-wrap {
    position: relative;
  }

  .work-panel {
    width: 100%;
    opacity: 0;
    transform: translateY(18px);
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    transition:
      opacity  0.42s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .work-panel--visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    position: relative;
  }

  /* Work grids */
  .work-grid {
    display: grid;
    gap: 1.25rem;
    width: 100%;
  }

  .work-grid--landscape {
    grid-template-columns: repeat(3, 1fr);
  }

  .work-grid--portrait {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  .work-card {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    background: #111;
    border: 1px solid rgba(255, 231, 208, 0.06);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.35s ease,
                border-color 0.35s ease;
  }

  .work-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    border-color: rgba(252, 110, 32, 0.35);
  }

  .work-card.aspect-long  { aspect-ratio: 16 / 9; }
  .work-card.aspect-reel  { aspect-ratio: 9 / 16; }
  .work-card--image       { aspect-ratio: 16 / 9; }

  .work-card__video,
  .work-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

"@

# Find the @keyframes section and insert new CSS before it
$marker = "@keyframes card-send-to-back {"
$idx = $css.IndexOf($marker)
if ($idx -ge 0) {
    $css = $css.Substring(0, $idx) + $newRules + "`r`n" + $css.Substring($idx)
    Set-Content $cssFile -Value $css -Encoding UTF8 -NoNewline
    Write-Host "CSS injected successfully"
} else {
    Write-Host "Marker not found — appending to file"
    $css += $newRules
    Set-Content $cssFile -Value $css -Encoding UTF8 -NoNewline
}
