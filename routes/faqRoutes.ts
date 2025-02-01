import { Router } from 'express';
import {
  getFaqs,
  createFaq,
  getFaqsInEnglish,
  getFaqsInHindi,
  getFaqsInBengali
} from '../controllers/faqController';

const router = Router();

// Fetch FAQs with language query (default is English)
router.get('/faqs', getFaqs);

// Fetch FAQs in English
router.get('/faqs/english', getFaqsInEnglish);

// Fetch FAQs in Hindi
router.get('/faqs/hindi', getFaqsInHindi);

// Fetch FAQs in Bengali
router.get('/faqs/bengali', getFaqsInBengali);

// Create a new FAQ (POST request)
router.post('/faqs', createFaq);

export default router;
